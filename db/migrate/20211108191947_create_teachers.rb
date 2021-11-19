class CreateTeachers < ActiveRecord::Migration[6.1]
  def change
    create_table :teachers do |t|
      t.string "name"
      t.string "bio"

      t.timestamps
    end
  end
end
