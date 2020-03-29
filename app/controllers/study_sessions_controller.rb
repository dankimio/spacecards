class StudySessionsController < ApplicationController
  before_action :authenticate_user!, only: %i[show]
  before_action :set_user_deck, only: %i[show]

  def show
    @study_session = @user_deck.study_sessions.recent.first ||
                     @user_deck.study_sessions.create!
  end

  private

  def set_user_deck
    @user_deck = current_user.user_decks.find(params[:user_deck_id])
  end
end
