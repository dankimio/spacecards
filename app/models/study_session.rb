class StudySession < ApplicationRecord
  belongs_to :user
  belongs_to :user_deck
end
