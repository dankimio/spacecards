# Inspired by:
# - https://gist.github.com/jwo/1255275/842756ae71fcb4fb5bb6ab8b5fd7019470725c70
# - https://gist.github.com/marcomd/3129118
class Users::SessionsController < Devise::SessionsController
  protect_from_forgery unless: -> { request.format.json? }

  # Devise has its own verification in place that we need to bypass
  # https://stackoverflow.com/a/26244910/2505156
  skip_before_action :verify_signed_out_user

  # POST /api/users/sign_in
  def create
    user = User.find_by(email: params.dig(:session, :email)&.downcase)
    return unauthorized unless user

    if user.valid_password?(params.dig(:session, :password))
      sign_in(:user, user)
      render json: user
    else
      unauthorized
    end
  end

  # DELETE /api/users/sign_out
  def destroy
    if user_signed_in?
      sign_out(:user)
      head :no_content
    else
      unauthorized
    end
  end

  protected

  def unauthorized
    warden.custom_failure!
    head :unauthorized
  end
end
