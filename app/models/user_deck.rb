# == Schema Information
#
# Table name: user_decks
#
#  id                :bigint           not null, primary key
#  user_id           :bigint           not null
#  shared_deck_id    :bigint
#  name              :string           not null
#  user_cards_count  :integer          default(0)
#  new_cards_per_day :integer          default(20)
#  reviews_per_day   :integer          default(20)
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  description       :text
#
class UserDeck < ApplicationRecord
  belongs_to :shared_deck, optional: true
  belongs_to :user

  has_many :user_cards, dependent: :destroy
  has_many :study_sessions, dependent: :destroy

  validates :name, presence: true, length: { maximum: 50 }, uniqueness: true
  validates :description, presence: true, allow_blank: true
  validates :shared_deck, uniqueness: { scope: :user }, if: :shared_deck_id?

  before_validation :set_name_from_shared_deck, if: :shared_deck_id?, on: :create

  after_create_commit :add_cards_from_shared_deck, if: :shared_deck_id?

  private

  def set_name_from_shared_deck
    self.name = shared_deck.name
  end

  def add_cards_from_shared_deck
    shared_card_columns = %i[id front back]
    values = shared_deck.shared_cards.pluck(*shared_card_columns)

    import_columns = %i[user_deck_id shared_card_id front back]
    UserCard.import(
      import_columns,
      values.map { |attributes| [id] + attributes }
    )
  end
end
