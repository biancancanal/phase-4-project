class Student < ApplicationRecord
    has_many :lessons
    has_many :teachers, through: :lessons
end
