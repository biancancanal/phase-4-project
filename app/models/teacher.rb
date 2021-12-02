class Teacher < ApplicationRecord
    validates :username, uniqueness: true, presence: true
    # validates :email, uniqueness: true, presence: true
    # has_secure_password
    has_many :lessons
    #defines a password= method that will take a string and run it through BCrypt to create the value that will live in the password_digest column 
    #defines an authenticate method that will check if a user's password encrypts to the same value as the stored value
    #defines a password_confirmation= method that checks confirmation matches original 
end
