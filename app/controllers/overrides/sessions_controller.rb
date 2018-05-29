class Overrides::SessionsController < Devise::SessionsController
  # protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token, only: %i[create]
  wrap_parameters format: [:json]

  def create
    if user.valid_password?(create_params[:password])
      render json: user.as_json(only: %i[email authentication_token]), status: :created
    else
      head :unauthorized
    end
  end

  # def destroy
  #   user.authentication_token = nil
  # end

  private

  def user
    @user ||= User.find_by(email: create_params[:email])
  end

  def create_params
    params.require(:session).permit(:email, :password)
  end

  def destroy_params
    params.permit(:email)
  end
end
