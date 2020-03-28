class RenameCardsToSharedCards < ActiveRecord::Migration[6.0]
  def change
    rename_table :cards, :shared_cards
    rename_column :shared_decks, :cards_count, :shared_cards_count
  end
end
