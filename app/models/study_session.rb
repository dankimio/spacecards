class StudySession < ApplicationRecord
  belongs_to :user
  belongs_to :user_deck

  has_many :reviews, dependent: :destroy
  has_many :user_cards, through: :reviews
end
