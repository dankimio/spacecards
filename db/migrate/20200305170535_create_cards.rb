class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.belongs_to :deck, null: false, foreign_key: true
      t.text :front, null: false
      t.text :back, null: false

      t.timestamps
    end
  end
end
