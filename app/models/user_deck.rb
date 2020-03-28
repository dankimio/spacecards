class UserDeck < ApplicationRecord
  belongs_to :deck, optional: true
  belongs_to :user

  has_many :user_cards, dependent: :destroy
end
