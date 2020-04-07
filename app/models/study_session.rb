# == Schema Information
#
# Table name: study_sessions
#
#  id              :bigint           not null, primary key
#  user_deck_id    :bigint           not null
#  new_cards_limit :integer          not null
#  due_cards_limit :integer          not null
#  completed       :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class StudySession < ApplicationRecord
  belongs_to :user_deck

  has_many :reviews, dependent: :destroy
  has_many :user_cards, through: :reviews

  validate :validate_not_empty

  before_validation :set_attributes, on: :create

  after_create_commit :create_due_card_reviews
  after_create_commit :create_new_card_reviews

  after_touch :set_completed, if: -> { reviews.unanswered.empty? }

  scope :incomplete, -> { where(completed: false) }
  scope :recent, -> { where('created_at > ?', 12.hours.ago) }

  private

  def set_attributes
    self.new_cards_limit = user_deck.new_cards_per_day
    self.due_cards_limit = user_deck.reviews_per_day
  end

  def create_due_card_reviews
    due_cards = user_deck.user_cards
      .due
      .limit(due_cards_limit)
      .pluck(:id)
      .map { |user_card_id| { user_card_id: user_card_id } }
    reviews.create!(due_cards)
  end

  def create_new_card_reviews
    new_cards = user_deck.user_cards
      .new_cards
      .limit(new_cards_limit)
      .pluck(:id)
      .map { |user_card_id| { user_card_id: user_card_id } }
    reviews.create!(new_cards)
  end

  def set_completed
    update_attribute(:completed, true)
  end

  def validate_not_empty
    return if user_deck.user_cards.due.count.positive?
    return if user_deck.user_cards.new_cards.count.positive?

    errors.add(:base, 'no cards to review')
  end
end
