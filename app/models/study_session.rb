class StudySession < ApplicationRecord
  belongs_to :user
  belongs_to :user_deck

  has_many :reviews, dependent: :destroy
  has_many :user_cards, through: :reviews

  before_validation :set_attributes, on: :create

  scope :recent, -> { where('created_at > ?', 24.hours.ago) }

  private

  def set_attributes
    self.user = user_deck.user
    self.new_cards_limit = user_deck.new_cards_per_day
    self.due_cards_limit = user_deck.reviews_per_day
  end
end
