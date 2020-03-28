class AddDescriptionToUserDecks < ActiveRecord::Migration[6.0]
  def change
    add_column :user_decks, :description, :text
  end
end
