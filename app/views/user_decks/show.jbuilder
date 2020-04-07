json.partial! 'user_decks/user_deck', user_deck: @user_deck
json.extract! @user_deck, :new_cards_per_day, :reviews_per_day

json.due_cards_count @user_deck.user_cards.due.count
json.new_cards_count @user_deck.user_cards.new_cards.count
