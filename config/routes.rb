Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do 
    resource :user, only: [:create]
    resources :users, only: [:index, :show]
    resource :session, only: [:index, :create, :destroy, :show, :edit]
    resources :projects, only: [:create, :destroy, :show, :index, :update]
    resources :tasks, only: [:create, :destroy, :show, :index, :update]
    resources :comments, only: [:create, :destroy, :show, :index, :update]
  end
  
  root "static_pages#root"
end
