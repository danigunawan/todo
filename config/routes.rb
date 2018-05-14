Rails.application.routes.draw do
  root 'application#index'
  resources :todos
  get '*path', to: 'application#index'
end
