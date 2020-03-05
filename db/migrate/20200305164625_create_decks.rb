class CreateDecks < ActiveRecord::Migration[6.0]
  def change
    create_table :decks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name, null: false
      t.integer :cards_count, default: 0
      t.boolean :public, default: false

      t.timestamps
    end
  end
end
