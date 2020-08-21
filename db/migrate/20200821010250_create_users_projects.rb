class CreateUsersProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :users_projects do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
      add_index :users_projects, :user_id
      add_index :users_projects, :project_id
  end
end
