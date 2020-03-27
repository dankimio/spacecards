class ChangeNotNullInUserDecks < ActiveRecord::Migration[6.0]
  def change
    change_column_null :user_decks, :deck_id, true
  end
end
