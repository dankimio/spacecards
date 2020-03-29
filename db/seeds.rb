user = User.create!(
  email: 'foo@bar.com',
  password: 'qwerty123'
)

5.times do |i|
  shared_deck = SharedDeck.create!(
    name: "Shared deck #{i + 1}",
    user: user,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit harum quaerat obcaecati, tempora non? Veritatis placeat quidem dolorem unde sint, excepturi esse consectetur maiores ea tempora quibusdam possimus rem.'
  )

  user_deck = user.user_decks.create!(
    shared_deck: shared_deck,
    name: "User deck #{i + 1}"
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
