class Remove < ActiveRecord::Migration[5.2]
  def change
      change_column :tasks, :owner_id, :integer, null: true
      change_column :tasks, :project_id, :integer, null: true
  end
end
