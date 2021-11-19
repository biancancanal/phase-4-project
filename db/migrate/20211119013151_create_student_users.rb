class CreateStudentUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :student_users do |t|

      t.timestamps
    end
  end
end
