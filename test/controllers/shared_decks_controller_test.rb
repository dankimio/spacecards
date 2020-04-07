require 'test_helper'

class SharedDecksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shared_deck = shared_decks(:shared_deck)
  end

  test 'should get index' do
    get shared_decks_url
    assert_response :success
  end

  test 'should get show' do
    get shared_deck_url(@shared_deck)
    assert_response :success
  end
end
