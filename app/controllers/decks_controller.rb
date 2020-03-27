class DecksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @decks = Deck.all
  end

  def show
    @deck = Deck.find(params[:id])
  end

  private

  def deck_params
    params.require(:deck).permit(:name, :description)
  end
end
