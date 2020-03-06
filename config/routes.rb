Rails.application.routes.draw do
  root 'pages#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  resources :decks, only: %i[index show] do
    resources :cards, only: %i[index update], shallow: true
  end
end
