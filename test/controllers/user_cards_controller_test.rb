require 'test_helper'

class UserCardsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get user_cards_index_url
    assert_response :success
  end

end
