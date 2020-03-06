Rails.application.routes.draw do
  root 'pages#index'

  scope :api do
    devise_for :users, controllers: {
      registrations: 'users/registrations',
      sessions: 'users/sessions'
    }
  end

  resources :decks, only: %i[index] do
    resources :cards, only: %i[index]
  end

  namespace :api do
  end
end
