class LessonSerializer < ActiveModel::Serializer
  attributes :id, :teacher_id, :title, :description, :remaining_spots, :date_and_time
  belongs_to :teacher
end
