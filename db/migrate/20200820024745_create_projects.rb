class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :project_name, null: false
      t.string :summary
      t.integer :owner_id, null: false
      t.datetime :start_date, null: false
      t.datetime :due_date, null: false
      t.boolean :complete, null: false
      t.timestamps
    end
    add_index :projects, :owner_id
  end
end
