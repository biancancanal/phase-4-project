class AddPasswordDigestToTeachers < ActiveRecord::Migration[6.1]
  def change
    add_column :teachers, :password_digest, :string
  end
end
