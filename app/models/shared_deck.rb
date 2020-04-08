# == Schema Information
#
# Table name: shared_decks
#
#  id                 :bigint           not null, primary key
#  user_id            :bigint           not null
#  name               :string           not null
#  shared_cards_count :integer          default(0)
#  public             :boolean          default(FALSE)
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  description        :text
#
class SharedDeck < ApplicationRecord
  belongs_to :user

  # TODO: switch dependent to :restrict_with_exception
  has_many :shared_cards, dependent: :destroy
  has_many :user_decks, dependent: :destroy

  validates :name, presence: true, length: { maximum: 50 }
  validates :description, presence: true, allow_nil: true
end
