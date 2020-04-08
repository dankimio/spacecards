require 'test_helper'

class UserDeckTest < ActiveSupport::TestCase
  setup do
    @user_deck = user_decks(:user_deck)
  end

  test 'valid' do
    assert @user_deck.valid?
  end

  test 'invalid with blank description' do
    @user_deck.description = ''
    assert @user_deck.invalid?
  end
end
