class CreateReleases < ActiveRecord::Migration
  def change
    create_table :releases do |t|
      t.string :name
      t.string :description
      t.integer :feature_id

      t.timestamps
    end
  end
end
