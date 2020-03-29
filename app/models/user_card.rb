class UserCard < ApplicationRecord
  belongs_to :user_deck
  belongs_to :shared_card, optional: true

  scope :due, -> { where('due_at > ?', Time.zone.now) }
  scope :fresh, -> { where(due_at: nil, recalled_at: nil, repetitions: 0) }
end
