# See: https://blog.andrewray.me/how-to-set-up-devise-ajax-authentication-with-rails-4-0/
class Users::SessionsController < Devise::SessionsController
  protect_from_forgery unless: -> { request.format.json? }

  respond_to :json
end
