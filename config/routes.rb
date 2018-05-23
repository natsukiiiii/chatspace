Rails.application.routes.draw do
  devise_for :users
    get 'chatspace' => 'messages_controller#index'
    root 'groups#index'
    resources :users, only: [:edit, :update, :index]
    resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :messages


end
end
