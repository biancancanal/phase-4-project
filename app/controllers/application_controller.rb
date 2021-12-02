class ApplicationController < ActionController::API
  include ActionController::Cookies

  private

  def current_user
    #use session to see who's currently logged in 
    @current_user ||= Teacher.find_by_id(session[:user_id])
  end

  # def authorize
  #   @current_user = Teacher.find_by(id: session[:user_id])
  # end 

end
