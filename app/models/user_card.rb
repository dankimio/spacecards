# == Schema Information
#
# Table name: user_cards
#
#  id              :bigint           not null, primary key
#  user_deck_id    :bigint           not null
#  shared_card_id  :bigint
#  front           :text             not null
#  back            :text             not null
#  easiness_factor :float            default(2.5), not null
#  repetitions     :integer          default(0), not null
#  due_at          :datetime
#  recalled_at     :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  interval        :integer          default(0), not null
#
class UserCard < ApplicationRecord
  belongs_to :user_deck, counter_cache: true
  belongs_to :shared_card, optional: true

  has_many :reviews, dependent: :destroy

  validates :front, :back, presence: true
  validates :shared_card, uniqueness: { scope: :user_deck }

  scope :due, -> { where('due_at > ?', Time.zone.now) }
  scope :new_cards, -> { where(due_at: nil, recalled_at: nil, repetitions: 0) }

  def recall(answer)
    return if answer.zero?

    repetition = Repetition::Flashcard.new(
      easiness_factor: easiness_factor,
      interval: interval,
      repetitions: repetitions
    )
    repetition.recall(answer)
    update(
      easiness_factor: repetition.easiness_factor,
      interval: repetition.interval,
      recalled_at: Time.zone.now,
      due_at: Time.zone.now + repetition.interval.days
    )
  end
end
