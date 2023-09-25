Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', action: :index, controller: 'users'
  # get 'login', to: "users#index"

  # resources :planets
  # resources :characters

  resources :planets do
    # resources :likes # /planets/:id/likes
    resources :characters
  end
end
