class CreateStudySessions < ActiveRecord::Migration[6.0]
  def change
    create_table :study_sessions do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :user_deck, null: false, foreign_key: true
      t.integer :new_cards_limit, null: false
      t.integer :due_cards_limit, null: false
      t.boolean :completed, null: false, default: false

      t.timestamps
    end
  end
end
