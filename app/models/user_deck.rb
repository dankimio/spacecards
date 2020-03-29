class UserDeck < ApplicationRecord
  belongs_to :shared_deck, optional: true
  belongs_to :user

  has_many :user_cards, dependent: :destroy
  has_many :study_sessions, dependent: :destroy
end
