# == Schema Information
#
# Table name: users_projects
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UsersProject < ApplicationRecord
    validates :user_id, :project_id, presence: true
    belongs_to(
        :user,
        class_name: 'User',
        foreign_key: :user_id,
        primary_key: :id
    )

    belongs_to(
        :project,
        class_name: 'Project',
        foreign_key: :project_id,
        primary_key: :id
    )
end
