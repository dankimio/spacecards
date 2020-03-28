require 'test_helper'

class UserTest < ActiveSupport::TestCase
  setup do
    @user = users(:user)
  end

  test 'valid' do
    assert @user.valid?
  end
end
