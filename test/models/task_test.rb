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
require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
