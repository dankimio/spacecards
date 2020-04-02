json.partial! 'shared_decks/shared_deck', shared_deck: @shared_deck

if user_signed_in?
  json.user_deck_id current_user.user_decks.find_by(shared_deck: @shared_deck).try(:id)
end
