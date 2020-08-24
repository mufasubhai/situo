class Removeprojectidcolumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :project_id
  end
end
