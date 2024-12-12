class AddStartAndEndLocationsToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :start_location, :string
    add_column :posts, :end_location, :string
  end
end
