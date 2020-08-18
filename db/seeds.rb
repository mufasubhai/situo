# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all


u1 = User.create!(
  name: 'Steve Wozniak',
  email: 'woz@woz.woz',
  password: 'hunter2',
  photo_url: ''
)

u1 = User.create!(
  name: 'David Byrne',
  email: 'byrne@byrne.byrne',
  password: 'hunter2',
  photo_url: ''
)

u1 = User.create!(
  name: 'Jeff Lebowski',
  email: 'jeff@jeff.jeff',
  password: 'hunter2',
  photo_url: ''
)

u1 = User.create!(
  name: 'Ruth Bader Ginsberg',
  email: 'ruth@ruth.ruth',
  password: 'hunter2',
  photo_url: ''
)

u1 = User.create!(
  name: 'Rocky Dax',
  email: 'rocky@dax.cat',
  password: 'hunter2',
  photo_url: ''
)


