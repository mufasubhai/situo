# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Project.delete_all
UsersProject.delete_all


u1 = User.create!(
  name: 'Steve Wozniak',
  email: 'woz@woz.woz',
  password: 'hunter2',
  photo_url: ''
)

u2 = User.create!(
  name: 'David Byrne',
  email: 'byrne@byrne.byrne',
  password: 'hunter2',
  photo_url: ''
)

u3 = User.create!(
  name: 'Jeff Lebowski',
  email: 'jeff@jeff.jeff',
  password: 'hunter2',
  photo_url: ''
)

u4 = User.create!(
  name: 'Ruth Bader Ginsberg',
  email: 'ruth@ruth.ruth',
  password: 'hunter2',
  photo_url: ''
)

u5 = User.create!(
  name: 'Rocky Dax',
  email: 'rocky@dax.cat',
  password: 'hunter2',
  photo_url: ''
)


p1 = Project.create!(
  project_name: 'Figure out who kidnapped Mrs. Lebowski.',
  summary: "There's just a lot of in's and out's... And, look at the kid. The kid has a brand new corvette, man. We gotta get to the bottom of this.",
  complete: false
)
p2 = Project.create!(
  project_name: 'Usher in the era of modern computing.',
  summary: "We thought we wanted to build a video game machine, but now that we think of it there isn't anything cooler than a GUI and some spreadsheets.",
  complete: false
)
p3 = Project.create!(
  project_name: 'Get as much kibble and canned cat food as is reasonable.',
  summary: 'We are so hungry. We must figure out a method for procuring all of the food from the hoomons. This is a dire situation. Let us divide it into tasks.',
  complete: false
)
p4 = Project.create!(
  project_name: 'Determine if this is in fact our beautiful house.',
  summary: 'We did not, in fact, find ourselves living in a shotgun shack. How did we get here? This is not my beautiful house... is it?',
  complete: false
)
p5 = Project.create!(
  project_name: 'Keep on fighting!',
  summary: "We made it this far. No time to slow down. Once I check out of this place it's time to go down to the martial arts gym and GET BACK IN SHAPE!",
  complete: false
)
p6 = Project.create!(
  project_name: 'Build a website or something.',
  summary: "Do we want to build an internet? I think we do. We can get this done if we just put our minds to it. What is a javascript anyway? Who knows... I guess let's get started!",
  complete: false
)



up1 = UsersProject.create!(
  user_id: u1.id,
  project_id: p1.id
)
up2 = UsersProject.create!(
  user_id: u1.id,
  project_id: p2.id 
)
up3 = UsersProject.create!(
  user_id: u1.id,
  project_id: p3.id 
)
up4 = UsersProject.create!(
  user_id: u1.id,
  project_id: p4.id 
)
up5 = UsersProject.create!(
  user_id: u1.id,
  project_id: p5.id 
)
up6 = UsersProject.create!(
  user_id: u1.id,
  project_id: p6.id   
)
up7 = UsersProject.create!(
  user_id: u2.id,
  project_id: p1.id 
)
up8 = UsersProject.create!(
  user_id: u2.id,
  project_id: p2.id 
)
up9 = UsersProject.create!(
  user_id: u2.id,
  project_id: p3.id 
)
up10 = UsersProject.create!(
  user_id: u2.id,
  project_id: p4.id 
)
up11 = UsersProject.create!(
  user_id: u2.id,
  project_id: p5.id 
)
up12 = UsersProject.create!(
  user_id: u2.id,
  project_id: p6.id   
)
up13 = UsersProject.create!(
  user_id: u3.id,
  project_id: p1.id 
)
up14 = UsersProject.create!(
  user_id: u3.id,
  project_id: p2.id 
)
up15 = UsersProject.create!(
  user_id: u3.id,
  project_id: p3.id 
)
up16 = UsersProject.create!(
  user_id: u3.id,
  project_id: p4.id 
)
up17 = UsersProject.create!(
  user_id: u3.id,
  project_id: p5.id 
)
up18 = UsersProject.create!(
  user_id: u3.id,
  project_id: p6.id   
)
up19 = UsersProject.create!(
  user_id: u4.id,
  project_id: p1.id 
)
up20 = UsersProject.create!(
  user_id: u4.id,
  project_id: p2.id 
)
up21 = UsersProject.create!(
  user_id: u4.id,
  project_id: p3.id 
)
up22 = UsersProject.create!(
  user_id: u4.id,
  project_id: p4.id 
)
up23 = UsersProject.create!(
  user_id: u4.id,
  project_id: p5.id 
)
up24 = UsersProject.create!(
  user_id: u4.id,
  project_id: p6.id   
)
up25 = UsersProject.create!(
  user_id: u5.id,
  project_id: p1.id 
)
up26 = UsersProject.create!(
  user_id: u5.id,
  project_id: p2.id 
)
up27 = UsersProject.create!(
  user_id: u5.id,
  project_id: p3.id 
)
up28 = UsersProject.create!(
  user_id: u5.id,
  project_id: p4.id 
)
up29 = UsersProject.create!(
  user_id: u5.id,
  project_id: p5.id 
  
)
up30 = UsersProject.create!(
  user_id: u5.id,
  project_id: p6.id
)