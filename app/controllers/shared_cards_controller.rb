class CardsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :set_shared_card, only: %i[update destroy]

  def index
    @shared_deck = SharedDeck.find(params[:shared_deck_id])
    @shared_cards = @shared_deck.shared_cards.order(created_at: :desc)
  end

  def update
    if @shared_card.update(shared_card_params)
      head :ok
    else
      render json: @shared_card.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @shared_card.destroy
    head :no_content
  end

  private

  def set_shared_card
    @shared_card = shared_Card.find(params[:id])
  end

  def card_params
    params.require(:shared_card).permit(:front, :back)
  end
end
