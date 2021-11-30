Rails.application.routes.draw do

resources :lessons, only: [:index, :show, :create, :update, :destroy]
post "/signup", to: "teachers#create"
get "/me", to: "teachers#show"
post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
