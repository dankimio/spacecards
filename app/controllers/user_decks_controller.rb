class UserDecksController < ApplicationController
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
