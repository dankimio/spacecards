Rails.application.routes.draw do
  root 'pages#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  resources :decks, only: %i[index show create] do
    resources :cards, only: %i[index update destroy], shallow: true
  end
  resources :user_decks, except: %i[new edit]
end
