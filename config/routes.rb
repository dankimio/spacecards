Rails.application.routes.draw do
  root 'pages#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
  }

  resources :shared_decks, only: %i[index show] do
    resources :shared_cards, only: %i[index update destroy], shallow: true
  end
  resources :study_sessions, only: [] do
    resources :reviews, only: %i[update]
  end
  resources :user_decks, except: %i[new edit] do
    resource :study_session, only: %i[show]
    resources :user_cards, only: %i[index update destroy], shallow: true
  end
end
