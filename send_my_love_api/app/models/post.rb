class Post < ApplicationRecord
  scope :most_recent,       -> (limit) { order("created_at desc").limit(limit) }
  scope :city_count,        -> { distinct.count(:city) }
  scope :country_count,     -> { distinct.count(:country) }
  scope :count_all,         -> { count(:all) }
  scope :count_per_city,    -> { group(:city).count }
  scope :count_per_country, -> { group(:country).count }
  scope :person_count,      -> { distinct.count(:name) }
end
