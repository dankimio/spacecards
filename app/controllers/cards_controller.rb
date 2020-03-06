class CardsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  before_action :set_card, only: %i[update destroy]

  def index
    @deck = Deck.find(params[:deck_id])
    @cards = @deck.cards.order(created_at: :desc)
  end

  def update
    if @card.update(card_params)
      head :ok
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @card.destroy
    head :no_content
  end

  private

  def set_card
    @card = Card.find(params[:id])
  end

  def card_params
    params.require(:card).permit(:front, :back)
  end
end
