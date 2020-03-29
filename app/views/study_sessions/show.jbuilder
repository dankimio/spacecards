json.extract! @study_session, :id, :new_cards_limit, :due_cards_limit, :completed

json.reviews do
  json.array! @study_session.reviews do |review|
    json.partial! 'reviews/review', review: review

    json.user_card do
      json.partial! 'user_cards/user_card', user_card: review.user_card
    end
  end
end
