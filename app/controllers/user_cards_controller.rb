class UserCardsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user_deck, only: %i[index]

  def index
    @user_cards = @user_deck.user_cards
  end

  private

  def set_user_deck
    @user_deck = current_user.user_decks.find(params[:user_deck_id])
  end
end
