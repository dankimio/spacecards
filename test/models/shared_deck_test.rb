require 'test_helper'

class SharedDeckTest < ActiveSupport::TestCase
  setup do
    @shared_deck = shared_decks(:shared_deck)
  end

  test 'valid' do
    assert @shared_deck.valid?
  end
end
