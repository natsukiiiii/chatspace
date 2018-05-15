Rails.application.routes.draw do
  devise_for :users
    get 'chatspace' => 'messages_controller#index'
    root 'groups#index'
      # root 'messages#index'
    resources :users, only: [:edit, :update]
    resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :messages


end
end
