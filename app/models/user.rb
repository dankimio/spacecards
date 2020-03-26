class User < ApplicationRecord
  # TODO: configure `dependent`
  has_many :decks
  has_many :user_decks, dependent: :destroy

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
