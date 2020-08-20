# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  project_name :string           not null
#  summary      :string
#  owner_id     :integer          not null
#  start_date   :datetime         not null
#  due_date     :datetime         not null
#  complete     :boolean          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Project < ApplicationRecord
    validates :project_name, :owner_id, :start_date, :due_date, :complete, presence: true
    
end
