class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :country, :lat, :lng, :distance_from_last_city,
             :running_total_distance, :created_at
end
