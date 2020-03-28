class Review < ApplicationRecord
  belongs_to :study_session
  belongs_to :user_card
end
