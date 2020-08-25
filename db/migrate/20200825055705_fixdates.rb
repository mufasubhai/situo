class Fixdates < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :due_date, :date, null: true
    change_column :tasks, :start_date, :date, null: true
    change_column :tasks, :due_date, :date, null: true
  end
end
