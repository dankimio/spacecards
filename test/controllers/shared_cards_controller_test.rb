require 'test_helper'

class SharedCardsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shared_deck = shared_decks(:shared_deck)
    @shared_card = shared_cards(:shared_card)
  end

  test 'should get index' do
    get shared_deck_shared_cards_url(@shared_deck)
    assert_response :success
  end

  # TODO: implement authentication
  test 'should update shared_card' do
    patch shared_card_url(@shared_card), headers: jwt_headers
    assert_response :ok
  end
end
