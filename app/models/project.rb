# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  project_name :string           not null
#  summary      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  complete     :boolean          default(FALSE)
#
class Project < ApplicationRecord
    validates :project_name, presence: true

    has_many(
        :users_projects,
        class_name: 'UsersProject',
        foreign_key: :project_id,
        primary_key: :id
    )

  has_many :users, through: :users_projects, source: :user

end
