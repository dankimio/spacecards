class UserCardsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  before_action :authenticate_user!
  before_action :set_user_deck, only: %i[index]
  before_action :set_user_card, only: %i[update destroy]

  def index
    @user_cards = @user_deck.user_cards.order(created_at: :asc)
  end

  def update
    if @user_card.update(user_card_params)
      head :ok
    else
      render json: @user_card.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user_card.destroy
    head :no_content
  end

  private

  def set_user_deck
    @user_deck = current_user.user_decks.find(params[:user_deck_id])
  end

  def set_user_card
    @user_card = current_user.user_cards.find(params[:id])
  end

  def user_card_params
    params.require(:user_card).permit(:front, :back)
  end
end