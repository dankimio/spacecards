class AddSharedDeckIdIndexToUserDecks < ActiveRecord::Migration[6.0]
  def change
    add_index :user_decks, %i[shared_deck_id user_id], unique: true
  end
end
