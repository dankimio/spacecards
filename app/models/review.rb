class Review < ApplicationRecord
  belongs_to :study_session
  belongs_to :user_card

  validates :user_card, uniqueness: { scope: :study_session }
end
