class RemoveUserFromStudySessions < ActiveRecord::Migration[6.0]
  def change
    remove_reference :study_sessions, :user, null: false, foreign_key: true
  end
end
