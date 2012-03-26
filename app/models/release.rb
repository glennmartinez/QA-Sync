class Release < ActiveRecord::Base
  validates :name, :presence => true
  validates :description, :presence => true

  has_many :features
end
