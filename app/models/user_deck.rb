class UserDeck < ApplicationRecord
  belongs_to :deck, optional: true
  belongs_to :user
end
