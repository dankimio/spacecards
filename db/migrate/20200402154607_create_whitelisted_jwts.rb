class CreateWhitelistedJwts < ActiveRecord::Migration[6.0]
  def change
    create_table :whitelisted_jwts do |t|
      t.string :jti, null: false
      t.string :aud
      t.datetime :exp, null: false
      t.belongs_to :user, null: false, foreign_key: { on_delete: :cascade }

      t.timestamps
    end

    add_index :whitelisted_jwts, :jti, unique: true
  end
end
