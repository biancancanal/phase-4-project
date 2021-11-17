class CreateLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons do |t|
      t.string "class"

      t.integer "teacher_id"
      t.integer "student_id"
      t.timestamps
    end
  end
end
