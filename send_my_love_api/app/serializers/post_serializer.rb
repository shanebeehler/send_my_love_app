class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :created_at
end
