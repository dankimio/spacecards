json.partial! 'user_decks/user_deck', user_deck: @user_deck
json.due_cards_count @user_deck.user_cards.due.count
json.new_cards_count @user_deck.user_cards.new_cards.count
