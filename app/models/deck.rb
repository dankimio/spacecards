class Deck < ApplicationRecord
  belongs_to :user

  # TODO: switch dependent to :restrict_with_exception
  has_many :cards, dependent: :destroy

  validates :name, presence: true, length: { maximum: 50 }
end