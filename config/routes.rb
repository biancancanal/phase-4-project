Rails.application.routes.draw do
  # resources :lessons
  # resources :teachers
  # resources :users
  # resources :teachers do 
  #   end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
