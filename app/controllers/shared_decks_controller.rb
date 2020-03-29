class SharedDecksController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[index show]

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
