# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  project_id :integer          not null
#  task_id    :integer          not null
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :author_id, :task_id, :project_id, presence: true

    belongs_to(
        :author,
        class_name: 'User',
        foreign_key: :author_id,
        primary_key: :id
    )

    belongs_to :project
    belongs_to :task

end
