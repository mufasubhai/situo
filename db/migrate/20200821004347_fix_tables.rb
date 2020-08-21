class FixTables < ActiveRecord::Migration[5.2]
  def change
      remove_column :projects, :start_date
      remove_column :projects, :due_date
      remove_column :projects, :owner_id
      remove_column :tasks, :complete
      add_column :tasks, :status, :string, default: 'not-started'
  end
end
