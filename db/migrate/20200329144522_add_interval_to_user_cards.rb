class AddIntervalToUserCards < ActiveRecord::Migration[6.0]
  def change
    add_column :user_cards, :interval, :integer, null: false, default: 0
  end
end
