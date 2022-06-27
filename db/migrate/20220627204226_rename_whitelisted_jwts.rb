class RenameWhitelistedJwts < ActiveRecord::Migration[6.0]
  def change
    rename_table :whitelisted_jwts, :allowlisted_jwts
  end
end
