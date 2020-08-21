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
require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
