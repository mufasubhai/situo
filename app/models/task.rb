# == Schema Information
#
# Table name: tasks
#
#  id          :bigint           not null, primary key
#  project_id  :integer
#  owner_id    :integer
#  creator_id  :integer          not null
#  task_name   :string           not null
#  description :text
#  start_date  :date
#  due_date    :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  status      :string           default("not-started")
#
class Task < ApplicationRecord
    validates :creator_id, :task_name, presence: true
    validates :status, inclusion: {in: %w(not-started started complete)}
    
 
    has_many :comments

    belongs_to(
        :creator,
        class_name: 'User',
        foreign_key: :creator_id,
        primary_key: :id     
        ) 


end
