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
  belongs_to :study_session
  belongs_to :user_card

  validates :user_card, uniqueness: { scope: :study_session }

  after_update_commit -> { user_card.recall(answer) },
                      if: -> { answer && answer.positive? }
end
