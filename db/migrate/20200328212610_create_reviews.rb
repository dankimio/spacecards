class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :study_session, null: false, foreign_key: true
      t.belongs_to :user_card, null: false, foreign_key: true
      t.integer :answer, null: false

      t.timestamps
    end
    add_index :reviews, %i[study_session_id user_card_id], unique: true
  end
end
