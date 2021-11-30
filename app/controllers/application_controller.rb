class ApplicationController < ActionController::API
  include ActionController::Cookies

  private

  def current_user
    Teacher.first
  end

  # def authorize
  #   @current_user = Teacher.find_by(id: session[:user_id])
  # end 

end
