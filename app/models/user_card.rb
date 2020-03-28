class UserCard < ApplicationRecord
  belongs_to :user_deck
  belongs_to :shared_card, optional: true
end
