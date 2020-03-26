class CreateUserDecks < ActiveRecord::Migration[6.0]
  def change
    create_table :user_decks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :deck, null: false, foreign_key: true
      t.string :name, null: false
      t.integer :user_cards_count, default: 0
      t.integer :new_cards_per_day, default: 20
      t.integer :reviews_per_day, default: 20

      t.timestamps
    end
  end
end
