class RemoveFeaturesFromRelease < ActiveRecord::Migration
  def up
    remove_column :releases, :features
  end

  def down
    add_column :releases, :features, :integer
  end
end
