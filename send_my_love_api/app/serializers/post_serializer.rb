class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :country, :lat, :lng, :created_at
end
