Rails.application.routes.draw do
  devise_for :users, only: %i[sessions], controllers: { sessions: 'overrides/sessions' }
  root 'application#index'
  resources :todos
  get '*path', to: 'application#index'
end
