class StudySessionsController < ApplicationController
  before_action :set_user_deck, only: %i[show]

  def show
    @study_session = @user_deck.study_sessions
      .includes(reviews: :user_card)
      .recent
      .first
    return if @study_session

    @study_session = @user_deck.study_sessions
      .includes(reviews: :user_card)
      .build

    if @study_session.save
      render :show, status: :created
    else
      render json: @study_session.errors, status: :unprocessable_entity
    end
  end

  private

  def set_user_deck
    @user_deck = current_user.user_decks.find(params[:user_deck_id])
  end
end
