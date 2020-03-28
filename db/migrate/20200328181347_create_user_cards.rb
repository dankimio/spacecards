class CreateUserCards < ActiveRecord::Migration[6.0]
  def change
    create_table :user_cards do |t|
      t.belongs_to :user_deck, null: false, foreign_key: true
      t.belongs_to :shared_card, foreign_key: true
      t.text :front, null: false
      t.text :back, null: false
      t.float :easiness_factor, default: 2.5, null: false
      t.integer :repetitions, default: 0, null: false
      t.datetime :due_at
      t.datetime :recalled_at

      t.timestamps
    end
  end
end
