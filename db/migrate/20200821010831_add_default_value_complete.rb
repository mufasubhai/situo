class AddDefaultValueComplete < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :complete
    add_column :projects, :complete, :boolean, :default => false
  end
end
