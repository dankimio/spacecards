class AddDescriptionToDecks < ActiveRecord::Migration[6.0]
  def change
    add_column :decks, :description, :text
  end
end
