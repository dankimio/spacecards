class UserDecksController < ApplicationController
  def index
    @user_decks = current_user.user_decks
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
