require 'test_helper'

class UserCardTest < ActiveSupport::TestCase
  setup do
    @user_card = user_cards(:user_card)
  end

  test 'valid' do
    assert @user_card.valid?
  end
end
