class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :project_id, null: false
      t.integer :owner_id, null: false
      t.integer :creator_id, null: false
      t.string :task_name, null: false
      t.text :description
      t.datetime :start_date, null: false
      t.datetime :due_date, null: false
      t.boolean :complete, null: false
      t.timestamps
    end

    create_table :users_projects do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
      
      add_index  :users_projects, :project_id
      add_index  :users_projects, :user_id
      add_index :tasks, :project_id
      add_index :tasks, :owner_id
      add_index :tasks, :creator_id
      
  end
end
