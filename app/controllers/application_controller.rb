class ApplicationController < ActionController::Base
  include Pundit

  protect_from_forgery unless: -> { request.format.json? }

  before_action :authenticate_user!

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  private

  def user_not_authorized
    raise ActionController::RoutingError, 'Not Authorized'
  end
end
