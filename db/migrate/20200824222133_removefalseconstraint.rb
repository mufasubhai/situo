class Removefalseconstraint < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :due_date, :datetime, null: true
    change_column :projects, :owner_id, :integer, null: true
  end
end
