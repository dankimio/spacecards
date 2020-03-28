class SharedDecksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @shared_decks = SharedDeck.all
  end

  def show
    @shared_deck = SharedDeck.find(params[:id])
  end

  private

  def shared_deck_params
    params.require(:shared_deck).permit(:name, :description)
  end
end
