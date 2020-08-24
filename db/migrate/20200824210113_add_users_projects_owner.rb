class AddUsersProjectsOwner < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :project_id, :integer, null:   false
    add_column :projects, :owner_id, :integer, null: false
  end
end
