class ChangeHousesTable < ActiveRecord::Migration[5.1]
  def up
    change_column :houses, :address, :string
  end
end
