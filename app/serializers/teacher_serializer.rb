class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :bio
  has_many :lessons
end
