class CreateLessons < ActiveRecord::Migration[6.1]
  def change
    create_table :lessons do |t|
      t.integer :teacher_id
      t.string :title
      t.string :description
      t.integer :remaining_spots
      t.string :date_and_time

      t.timestamps
    end
  end
end
