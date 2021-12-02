Rails.application.routes.draw do

resources :lessons, only: [:index, :show, :create, :update, :destroy]
# post "/signup", to: 
# get "/me", to: "teachers#show"
post "/login", to: "sessions#create"
post "/me", to: "teachers#show"
post "/signup", to: "teachers#create"
get "/login", to: "sessions#show"
delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
