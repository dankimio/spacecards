require 'test_helper'

class SharedCardTest < ActiveSupport::TestCase
  setup do
    @shared_card = shared_cards(:shared_card)
  end

  test 'valid' do
    assert @shared_card.valid?
  end
end
