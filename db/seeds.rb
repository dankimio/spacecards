user = User.create!(
  email: 'foo@bar.com',
  password: 'qwerty123'
)

10.times do |i|
  deck = SharedDeck.create!(
    name: "Shared deck #{i + 1}",
    user: user,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam fugit harum quaerat obcaecati, tempora non? Veritatis placeat quidem dolorem unde sint, excepturi esse consectetur maiores ea tempora quibusdam possimus rem.'
  )

  10.times do |j|
    deck.cards.create!(
      front: "#{deck.name}. Front #{j + 1}",
      back: "#{deck.name}. Back #{j + 1}"
    )
  end

  user.user_decks.create!(
    deck: deck,
    name: deck.name
  )
end
