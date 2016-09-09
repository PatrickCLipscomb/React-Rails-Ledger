Rails.application.routes.draw do
  root :to => 'firstmodels#index'
  resources :firstmodels do
    resources :secondmodels
  end
end
