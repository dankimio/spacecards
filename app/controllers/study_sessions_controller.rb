class StudySessionsController < ApplicationController
  before_action :set_user_deck, only: %i[show]

  def show
    @study_session = @user_deck.study_sessions
      .includes(reviews: :user_card)
      .recent.incomplete
      .first
    return if @study_session

    @study_session = @user_deck.study_sessions
      .includes(reviews: :user_card)
      .create!
  end

  private

  def set_user_deck
    @user_deck = current_user.user_decks.find(params[:user_deck_id])
  end
end
