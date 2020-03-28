class RenameDecksToSharedDecks < ActiveRecord::Migration[6.0]
  def change
    rename_table :decks, :shared_decks
    rename_column :cards, :deck_id, :shared_deck_id
    rename_column :user_decks, :deck_id, :shared_deck_id
  end
end
