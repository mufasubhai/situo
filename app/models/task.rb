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
end
