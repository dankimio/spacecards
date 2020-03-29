class StudySession < ApplicationRecord
  belongs_to :user
  belongs_to :user_deck

  has_many :reviews, dependent: :destroy
  has_many :user_cards, through: :reviews

  before_validation :set_attributes, on: :create

  after_create_commit :create_due_card_reviews
  after_create_commit :create_new_card_reviews

  scope :incomplete, -> { where(completed: false) }
  scope :recent, -> { where('created_at > ?', 24.hours.ago) }

  private

  def set_attributes
    self.new_cards_limit = user_deck.new_cards_per_day
    self.due_cards_limit = user_deck.reviews_per_day
  end

  def create_due_card_reviews
    due_user_cards = user_deck.user_cards
      .due
      .limit(due_cards_limit)
      .pluck(:id)
      .map { |user_card_id| { user_card_id: user_card_id } }
    reviews.create!(due_user_cards)
  end

  def create_new_card_reviews
    fresh_user_cards = user_deck.user_cards
      .fresh
      .limit(new_cards_limit)
      .pluck(:id)
      .map { |user_card_id| { user_card_id: user_card_id } }
    reviews.create!(fresh_user_cards)
  end
end
