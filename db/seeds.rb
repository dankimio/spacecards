user = User.create!(
  email: 'foo@bar.com',
  password: 'qwerty123'
)

DECK_NAMES = [
  '3000 Most Common French Words',
  '200 Essential German Words',
  'English Phrasal Verbs',
  '1000 Most Common Russian Words',
  'Irregular Verbs in English',
  'Roman Emperors',
  'World Capitals',
  'EU Countries',
  'World War II'
]

5.times do
  SharedDeck.create!(
    name: DECK_NAMES.sample,
    user: user,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Numquam fugit harum quaerat obcaecati, tempora non? Veritatis
    placeat quidem dolorem unde sint excepturi esse consectetur
    maiores ea tempora quibusdam possimus rem.'.truncate(
      (16..128).to_a.sample,
      omission: '', separator: /\s/
    )
  )
end

SharedDeck.find_each do |shared_deck|
  user_deck = user.user_decks.create!(
    shared_deck: shared_deck,
    name: shared_deck.name
  )

  20.times do |j|
    shared_card = shared_deck.shared_cards.create!(
      front: "#{user_deck.name}. Front #{j + 1}",
      back: "#{user_deck.name}. Back #{j + 1}"
    )

    user_deck.user_cards.create!(
      user_deck: user_deck,
      shared_card: shared_card,
      front: shared_card.front,
      back: shared_card.back
    )
  end
end
