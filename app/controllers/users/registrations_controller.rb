class Users::RegistrationsController < Devise::RegistrationsController
  protect_from_forgery unless: -> { request.format.json? }

  # See also: https://blog.andrewray.me/how-to-set-up-devise-ajax-authentication-with-rails-4-0/
  respond_to :json
end
