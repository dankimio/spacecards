class UserDecksController < ApplicationController
  before_actions :authenticate_user!, only: %i[index]

  def index
    @user_decks = User.first.user_decks
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
