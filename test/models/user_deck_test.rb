require 'test_helper'

class UserDeckTest < ActiveSupport::TestCase
  setup do
    @user_deck = user_decks(:user_deck)
  end

  test 'invalid with blank description' do
    @user_deck.description = ''
    assert @user_deck.invalid?
  end
end
