class UserDecksController < ApplicationController
  def index
    @user_decks = current_user.user_decks.order(name: :asc)
  end

  def show
    @user_deck = current_user.user_decks.find(params[:id])
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
