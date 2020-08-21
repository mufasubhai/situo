# == Schema Information
#
# Table name: tasks
#
#  id          :bigint           not null, primary key
#  project_id  :integer          not null
#  owner_id    :integer          not null
#  creator_id  :integer          not null
#  task_name   :string           not null
#  description :text
#  start_date  :datetime         not null
#  due_date    :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  status      :string           default("not-started")
#
class Task < ApplicationRecord
    validates :project_id, :owner_id, :creator_id, :task_name, :start_date, :due_date, presence: true
    validates :status, inclusion: {in: %w(not-started started complete)}
    
    belongs_to :project
    has_many :comments

    belongs_to(
        :owner,
        class_name: 'User',
        foreign_key: :owner_id,
        primary_key: :id     
        ) 
    belongs_to(
        :creator,
        class_name: 'User',
        foreign_key: :creator_id,
        primary_key: :id     
        ) 
    belongs_to(
        :project,
        class_name: 'Project',
        foreign_key: :project_id,
        primary_key: :id     
        ) 

end
