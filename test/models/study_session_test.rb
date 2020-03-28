require 'test_helper'

class StudySessionTest < ActiveSupport::TestCase
  setup do
    @study_session = study_sessions(:study_session)
  end

  test 'valid' do
    assert @study_session.valid?
  end
end
