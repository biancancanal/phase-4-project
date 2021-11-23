class Teacher < ApplicationRecord
    has_many :lessons
    has_many :users, through: :lessons
end
