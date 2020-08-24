class ProjectDueDate < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :due_date, :datetime, null: false
  end
end
