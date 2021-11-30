class Teacher < ApplicationRecord
    # validates :username, uniqueness: true, presence: true
    # validates :email, uniqueness: true, presence: true
    # has_secure_password
    has_many :lessons
end
