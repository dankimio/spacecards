class UserDecksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, only: %i[index create]

  def index
    @user_decks = current_user.user_decks
  end

  def create
    @user_deck = current_user.user_decks.build(user_deck_params)

    if @user_deck.save
      render json: @user_deck, status: :created
    else
      render json: @user_deck.errors, status: :unprocessable_entity
    end
  end

  private

  def user_deck_params
    params.require(:user_deck).permit(:name, :description)
  end
end
