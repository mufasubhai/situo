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
require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
