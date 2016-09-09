class Secondmodel < ActiveRecord::Base
  belongs_to :firstmodel
  has_many :thirdmodels
end
