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
require 'test_helper'

class UsersProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
