class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :country, :created_at
end
