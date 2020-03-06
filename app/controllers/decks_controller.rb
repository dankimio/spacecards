class DecksController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    @decks = Deck.all
  end

  def show
    @deck = Deck.find(params[:id])
  end

  def create
    @deck = User.first.decks.build(deck_params)

    if @deck.save
      render :show, status: :created
    else
      render json: @deck.errors, status: :unprocessable_entity
    end
  end

  private

  def deck_params
    params.require(:deck).permit(:name, :description)
  end
end
