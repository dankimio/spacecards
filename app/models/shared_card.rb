# == Schema Information
#
# Table name: shared_cards
#
#  id             :bigint           not null, primary key
#  shared_deck_id :bigint           not null
#  front          :text             not null
#  back           :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class SharedCard < ApplicationRecord
  belongs_to :shared_deck, counter_cache: true

  validates :front, :back, length: { minimum: 1, maximum: 255 }, presence: true
end
