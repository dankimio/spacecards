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
#
class UserCard < ApplicationRecord
  belongs_to :user_deck
  belongs_to :shared_card, optional: true

  scope :due, -> { where('due_at > ?', Time.zone.now) }
  scope :fresh, -> { where(due_at: nil, recalled_at: nil, repetitions: 0) }
end
