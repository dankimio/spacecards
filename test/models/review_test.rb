require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  setup do
    @review = reviews(:review)
  end

  test 'valid' do
    assert @review.valid?
  end
end
