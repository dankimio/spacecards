class UserDecksController < ApplicationController
  before_action :set_user_deck, only: %i[update destroy]

  def index
    @user_decks = current_user.user_decks.order(name: :asc)
  end

  def show
    @user_deck = current_user.user_decks.find(params[:id])
  end

  def create
    @user_deck = current_user.user_decks.build(user_deck_params)

    if @user_deck.save
      render :show, status: :created
    else
      render json: @user_deck.errors.as_json(full_messages: true), status: :unprocessable_entity
    end
  end

  def update
    if @user_deck.update(update_user_deck_params)
      render :show, status: :ok
    else
      render json: @user_deck.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user_deck.destroy
    head :no_content
  end

  private

  def set_user_deck
    @user_deck = current_user.user_decks.find(params[:id])
  end

  def user_deck_params
    params.require(:user_deck).permit(:name, :description, :shared_deck_id)
  end

  def update_user_deck_params
    params.require(:user_deck)
      .permit(:name, :description, :reviews_per_day, :new_cards_per_day)
  end
end
