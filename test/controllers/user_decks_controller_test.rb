require 'test_helper'

class UserDecksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_deck = user_decks(:user_deck)
  end

  test 'should get index' do
    get user_decks_url, headers: jwt_headers
    assert_response :success
  end

  test 'should get show' do
    get user_deck_url(@user_deck), headers: jwt_headers
    assert_response :success
  end

  test 'should create user_deck' do
    post user_decks_url,
         headers: jwt_headers,
         params: { user_deck: @user_deck.destroy.attributes }
    assert_response :created
  end

  test 'should update user_deck' do
    patch user_deck_url(@user_deck),
          headers: jwt_headers,
          params: { user_deck: @user_deck.attributes }
    assert_response :ok
  end

  test 'should destroy user_deck' do
    delete user_deck_url(@user_deck), headers: jwt_headers
    assert_response :no_content
  end
end
