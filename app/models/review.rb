# == Schema Information
#
# Table name: reviews
#
#  id               :bigint           not null, primary key
#  study_session_id :bigint           not null
#  user_card_id     :bigint           not null
#  answer           :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Review < ApplicationRecord
  belongs_to :study_session, touch: true
  belongs_to :user_card

  validates :user_card, uniqueness: { scope: :study_session }
  # Ignore '0' answers
  validates :answer, numericality: { greater_than: 0 }, on: :update

  after_update_commit -> { user_card.recall(answer) },
                      if: -> { answer && answer.positive? }

  scope :unanswered, -> { where(answer: nil) }
end
