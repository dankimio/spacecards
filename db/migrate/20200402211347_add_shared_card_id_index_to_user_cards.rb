class AddSharedCardIdIndexToUserCards < ActiveRecord::Migration[6.0]
  def change
    add_index :user_cards, %i[shared_card_id user_deck_id], unique: true
  end
end
