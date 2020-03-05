user = User.create!(
  email: 'foo@bar.com',
  password: 'qwerty123'
)

10.times do |i|
  deck = Deck.create!(name: "Deck #{i + 1}", user: user)

  # 10.times do |j|
  #   deck.cards.create!(front: "Front #{j + 1}", back: "Back #{j + 1}")
  # end
end
