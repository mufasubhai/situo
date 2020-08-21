class DropUsersProjects < ActiveRecord::Migration[5.2]
  def change
    drop_table :users_projects
  end
end
