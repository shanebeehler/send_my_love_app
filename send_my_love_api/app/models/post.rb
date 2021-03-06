class Post < ApplicationRecord
  require 'haversine'

  before_save :calculate_distance_from_last_city
  before_save :calculate_running_total_distance

  scope :most_recent,            -> (limit) { order("created_at desc").limit(limit) }
  scope :city_count,             -> { distinct.count(:city) }
  scope :country_count,          -> { distinct.count(:country) }
  scope :count_all,              -> { count(:all) }
  scope :count_per_city,         -> { group(:city).count }
  scope :count_per_country,      -> { group(:country).count }
  scope :person_count,           -> { distinct.count(:user_id) }
  scope :running_total_distance, -> { last.running_total_distance.to_i }

  def calculate_distance_from_last_city
    prev_lat = Post.last.lat
    prev_lng = Post.last.lng
    distance = Haversine.distance(prev_lat, prev_lng, self.lat, self.lng)
    self.distance_from_last_city = distance.to_km
  end

  def calculate_running_total_distance
    distance = 0
    if Post.last.running_total_distance != nil
      distance = Post.last.running_total_distance
    end
    self.running_total_distance = distance + self.distance_from_last_city
  end
end
