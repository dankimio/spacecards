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
end
