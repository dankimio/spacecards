class Card < ApplicationRecord
  belongs_to :deck, counter_cache: true

  validates :front, :back, length: { minimum: 1, maximum: 255 }, presence: true
end
