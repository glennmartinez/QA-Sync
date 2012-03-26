class AddReleaseIdToFeature < ActiveRecord::Migration
  def change
    add_column :features, :release_id, :integer
  end
end
