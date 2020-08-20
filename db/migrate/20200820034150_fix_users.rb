class FixUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :name
    add_column :users, :name, :string, null: false

  end
end
