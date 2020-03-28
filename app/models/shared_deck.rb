class SharedDeck < ApplicationRecord
  belongs_to :user

  # TODO: switch dependent to :restrict_with_exception
  has_many :shared_cards, dependent: :destroy
  has_many :user_decks, dependent: :destroy

  validates :name, presence: true, length: { maximum: 50 }
end
