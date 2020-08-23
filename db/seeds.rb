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
Comment.delete_all
Task.delete_all


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
  project_name: 'Personell Investigation',
  summary: "There's just a lot of in's and out's... And, look at the kid. The kid has a brand new corvette, man. We gotta get to the bottom of this.",
  complete: false
)
p2 = Project.create!(
  project_name: 'Computer Project.',
  summary: "We thought we wanted to build a video game machine, but now that we think of it there isn't anything cooler than a GUI and some spreadsheets.",
  complete: false
)
p3 = Project.create!(
  project_name: 'Sustenance 4 katz',
  summary: 'We are so hungry. We must figure out a method for procuring all of the food from the hoomons. This is a dire situation. Let us divide it into tasks.',
  complete: false
)
p4 = Project.create!(
  project_name: 'Fact Finding Mission',
  summary: 'We did not, in fact, find ourselves living in a shotgun shack. How did we get here? This is not my beautiful house... is it?',
  complete: false
)

p5 = Project.create!(
  project_name: 'Website Building',
  summary: "Do we want to build an internet? I think we do. We can get this done if we just put our minds to it. What is a javascript anyway? Who knows... I guess let's get started!",
  complete: false
)

p6 = Project.create!(
  project_name: 'Keep on fighting!',
  summary: "We made it this far. No time to slow down. Once I check out of this place it's time to go down to the martial arts gym and GET BACK IN SHAPE!",
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

date = DateTime.now
# project 1

t1 = Task.create(
  project_id: p1.id,
  owner_id: u2.id,
  creator_id: u3.id,
  task_name: "Need music for negotiations.",
  description: "Can you help me out by putting together a playlist for hostage negotiations? I can't find my CCR tapes. Hoping you can provide me with something similar.",
  start_date: date - 1 ,
  due_date: date + 5 ,
  status: 'complete',
  created_at: date - 1.7 

)
c1 = Comment.create!(
    author_id: u2.id,
    project_id: p1.id,
    task_id: t1.id,
    body: "To be honest, Jeff. I can't think of anything better to look into than CCR. Are you open to looking for bootlegs?",
    created_at: date - 1.2 ,
)
sleep 1
c2 = Comment.create!(
    author_id: u3.id,
    project_id: p1.id,
    task_id: t1.id,
    body: "I could be, but it would need to sound pretty close to Fogerty.",
    created_at: date - 0.8 ,
)


t2 = Task.create(
  project_id: p1.id,
  owner_id: u1.id,
  creator_id: u3.id,
  task_name: "Can I borrow a palm-pilot?",
  description: "I know you're the computer guy. Can I borrow a palm pilot? I need to keep track of what's going on with this project, and right now all the other PIs I speak with seem to have more gadgets than me.",
  start_date: date - 2,
  due_date: date + 2 ,
  status: 'started',
  created_at: date - 2 ,
)


c3 = Comment.create!(
  author_id: u1.id,
  project_id: p1.id,
  task_id: t2.id,
  body: "I can look into it. I think the stylus may be missing on the one I have.",
  created_at: date - 1.7 ,
  )
  
  sleep 1

c4 = Comment.create!(
    author_id: u3.id,
    project_id: p1.id,
    task_id: t2.id,
    body: "What's a stylus?",
    created_at: date - 1.5 ,
)
sleep 1


t3 = Task.create(
  project_id: p1.id,
  owner_id: u3.id,
  creator_id: u2.id,
  task_name: "Please provide more information.",
  description: "I realize that this ain't no party. This ain't no disco. This ain't no fooling around. Can you give me walter's contact information as well as some ideas as to how to best help on my end. I saw the task you assigned but I'd like a little more clarity.",
  start_date: date - 3 ,
  due_date: date + 1,
  status: 'not-started',
  created_at: date - 3 ,
)
c5 = Comment.create!(
    author_id: u3.id,
    project_id: p1.id,
    task_id: t3.id,
    body: "I think walter's number is like 555-555-5555. But that may have just been a number I saw on a bench ad.",
    created_at: date - 2.5 ,
)
c6 = Comment.create!(
    author_id: u2.id,
    project_id: p1.id,
    task_id: t3.id,
    body: "Sounds good. I'll try giving him a call.",
    created_at: date - 2.2 ,
)

t4 = Task.create(
  project_id: p1.id,
  owner_id: u3.id,
  creator_id: u1.id,
  task_name: "What's this all about?",
  description: "I have to say I'm a little confused by the relevance of this project to me. Can you provide a little more clarity?",
  start_date: date - 1 ,
  due_date: date + 3 ,
  status: 'not-started',
  created_at: date - 1 ,
)
c7 = Comment.create!(
    author_id: u3.id,
    project_id: p1.id,
    task_id: t4.id,
    body: "I'm just trying to get help with some sluething...",
    created_at: date - 0.8 ,
)

t5 = Task.create(
  project_id: p1.id,
  owner_id: u4.id,
  creator_id: u3.id,
  task_name: 'Provide legal advice',
  description: "I think I may be in over my head. I'd like to consult the services of a qualified lawyer. Send notes when you have a chance.",
  start_date: date - 2 ,
  due_date: date + 2,
  status: 'not-started',
  created_at: date - 2 ,
)

c8 = Comment.create!(
    author_id: u4.id,
    project_id: p1.id,
    task_id: t5.id,
    body: "What notes do you need?",
      created_at: date - 1.7,
)

c9 = Comment.create!(
    author_id: u3.id,
    project_id: p1.id,
    task_id: t5.id,
    body: "Pretty much whatever you got. Looking forward to your reply!",
    created_at: date - 1.5,
)

c10 = Comment.create!(
    author_id: u4.id,
    project_id: p1.id,
    task_id: t5.id,
    body: "Can you be a little more specific...",
    created_at: date - 1.3 ,
)

t6 = Task.create(
  project_id: p1.id,
  owner_id: u5.id,
  creator_id: u4.id,
  task_name: 'Keep on being cute!',
  description: "Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow Meow ",
  start_date: date,
  created_at: date,
  status: 'started',
  due_date: date +5 ,
)


c11 = Comment.create!(
    author_id: u5.id,
    project_id: p1.id,
    task_id: t6.id,
    body: "meow?",
    created_at: date + 1 ,
)

# project 2


t7 = Task.create(
  project_id: p2.id,
  owner_id: u2.id,
  creator_id: u1.id,
  task_name: "Make me a noise",
  description: "I want a neat noise for computers. Can you make some bleeps?",
  start_date: date,
  due_date: date + 3 ,
  status: 'not-started',
  created_at: date ,
)
c12 = Comment.create!(
    author_id: u2.id,
    project_id: p2.id,
    task_id: t7.id,
    body: "Can you tell me what kind of sounds you're looking for?",
    created_at: date + 0.2 ,
)

c13 = Comment.create!(
    author_id: u1.id,
    project_id: p2.id,
    task_id: t7.id,
    body: "I think I want something with a lot of noise. Maybe fuzzy. Can you help me out?",
    created_at: date + 0.5 ,
)
c14 = Comment.create!(
    author_id: u2.id,
    project_id: p2.id,
    task_id: t7.id,
    body: "Absolutely!I'll get started right away.",
    created_at: date + 0.8 ,
)

t8 = Task.create(
  project_id: p2.id,
  owner_id: u3.id,
  creator_id: u1.id,
  task_name: "Looking for information on competitors.",
  description: "I'm looking for some info on a competitor. Would you be able to do some sleuthing for me?",
  start_date: date - 2,
  due_date: date + 2 ,
  status: 'not-started',
  created_at: date - 2 
)
c15 = Comment.create!(
    author_id: u3.id,
    project_id: p2.id,
    task_id: t8.id,
    body: "Absolutely, Steve. I want to check with Ruth first though to see if there's anything from a... you know... legal perspective. Ruth, any thoughts?",
    created_at: date - 1.7 ,
)
c16 = Comment.create!(
    author_id: u4.id,
    project_id: p2.id,
    task_id: t8.id,
    body: "Looking into this, Jeff. I'll get back to you with a more detailed report, but I think it should be fine so long as you don't harrass anyone. ",
    created_at: date - 1.2 ,
)
c17 = Comment.create!(
    author_id: u1.id,
    project_id: p2.id,
    task_id: t8.id,
    body: "Thank you, both!Looking forward to seeing what you're able to dig up, Jeff. ",
    created_at: date - 1.2,
)

t9 = Task.create(
  project_id: p2.id,
  owner_id: u1.id,
  creator_id: u2.id,
  task_name: "What do you think this can do for the music?",
  description: "Interested in finding out what your new computational machine can do for post punk rock n' roll. Please send notes.",
  start_date: date - 3 ,
  due_date: date + 2,
  status: 'started',
  created_at: date - 3 ,
)
c18 = Comment.create!(
    author_id: u1.id,
    project_id: p2.id,
    task_id: t9.id,
    body: "I'm sending over some notes to your email right now. One thing to keep mind... computers are not guitars.",
    created_at: date - 2.3 ,
)
c19 = Comment.create!(
    author_id: u2.id,
    project_id: p2.id,
    task_id: t9.id,
    body: "Not yet at least. I'm optimistic, however.",
    created_at: date - 2 ,
)
c20 = Comment.create!(
    author_id: u1.id,
    project_id: p2.id,
    task_id: t9.id,
    body: "Well we'll look into it. I think there's definitely some potential.",
    created_at: date - 1.5,
)

t10 = Task.create(
  project_id: p2.id,
  owner_id: u3.id,
  creator_id: u1.id,
  task_name: "Please clean up the basement",
  description: "The basement is really messy right now and it smells strange. Need I remind you that this is my workshop? Thanks in advance~",
  start_date: date ,
  due_date: date ,
  status: 'not-started',
  created_at: date - 0.2,
)
c21 = Comment.create!(
    author_id: u3.id,
    project_id: p2.id,
    task_id: t10.id,
    body: "I think it looks pretty good, man...",
    created_at: date -0.12,
)
c22 = Comment.create!(
    author_id: u1.id,
    project_id: p2.id,
    task_id: t10.id,
    body: "It most certainly does not. Your help is appreciated!",
    created_at: date + 0.1,
)

t11 = Task.create(
  project_id: p2.id,
  owner_id: u5.id,
  creator_id: u1.id,
  task_name: "project photos",
  description: "if you're OK with it, I'd love to take some photos of you two just chilling on stuff for my computer project. Let me know what you think!",
  start_date: date - 2 ,
  due_date: date + 2,
  status: 'not-started',
  created_at: date - 2 ,
)

c23 = Comment.create!(
    author_id: u5.id,
    project_id: p2.id,
    task_id: t11.id,
    body: "Meow",
    created_at: date - 1.7 ,
)
c24 = Comment.create!(
    author_id: u1.id,
    project_id: p2.id,
    task_id: t11.id,
    body: "I'll take that as a tentative yes!",
    created_at: date - 1 ,
)
c25 = Comment.create!(
    author_id: u5.id,
    project_id: p2.id,
    task_id: t11.id,
    body: "meow",
    created_at: date - 0.7 ,
)

t12 = Task.create(
  project_id: p2.id,
  owner_id: u1.id,
  creator_id: u4.id,
  task_name: "Accessibility Options",
  description: "I want to remind you that in any devices you make, we'll need to include accessibility options in order to remain compliant (and it's the right thing to do)",
  start_date: date,
  created_at: date,
  status: 'started',
  due_date: date +10 ,
)


c26 = Comment.create!(
    author_id: u1.id,
    project_id: p2.id,
    task_id: t12.id,
    body: "What kinds of things are you thinking, Ruth?",
    created_at: date + 1
)
c27 = Comment.create!(
    author_id: u4.id,
    project_id: p2.id,
    task_id: t12.id,
    body: "We need to make sure that we have options for hearing & sight impaired individuals.",
    created_at: date + 1.5 ,
)
c28 = Comment.create!(
    author_id: u1.id,
    project_id: p2.id,
    task_id: t12.id,
    body: "Gotcha. That sounds like a lot of work. I'll get to it.",
    created_at: date + 1.6,
)

# project 3

t13 = Task.create(
  project_id: p3.id,
  owner_id: u1.id,
  creator_id: u5.id,
  task_name: "Help us get the kibble",
  description: "We need to get more kibble. You need to get it for us.",
  start_date: date  ,
  due_date: date + 5 ,
  status: 'complete',
  created_at: date,
)
c29 = Comment.create!(
    author_id: u1.id,
    project_id: p3.id,
    task_id: t13.id,
    body: "This doesn't seem particularly relevant to our workplace.",
    created_at: date + 0.1 ,
)
c30 = Comment.create!(
    author_id: u5.id,
    project_id: p3.id,
    task_id: t13.id,
    body: "mew",
    created_at: date + 0.2 ,
    
)
c31 = Comment.create!(
    author_id: u1.id,
    project_id: p3.id,
    task_id: t13.id,
    body: "I'm going to need something a little more before I get started on this.",
    created_at: date + 0.4 ,
)

t14 = Task.create(
  project_id: p3.id,
  owner_id: u2.id,
  creator_id: u5.id,
  task_name: "Please give us more kibble?",
  description: "Meow Meow Meow Meow Meow Meow ",
  start_date: date - 2,
  created_at: date - 2 ,
  status: 'started',
  due_date: date + 4 ,
)
c32 = Comment.create!(
    author_id: u2.id,
    project_id: p3.id,
    task_id: t14.id,
    body: "What? I require more information, cat!",
    created_at: date - 1.6,
)
c33 = Comment.create!(
    author_id: u5.id,
    project_id: p3.id,
    task_id: t14.id,
    body: "We think this one is pretty self explanatory.",
    created_at: date - 1.4,
)


t15 = Task.create(
  project_id: p3.id,
  owner_id: u3.id,
  creator_id: u5.id,
  task_name: "canned meat for cats",
  description: "meow Meow mew mow meow meow Meow mew mow meow meow Meow mew mow meow ",
  start_date: date - 3 ,
  created_at: date - 2.8,
  status: 'not-started',
  due_date: date + 4,
)
c34 = Comment.create!(
    author_id: u3.id,
    project_id: p3.id,
    task_id: t15.id,
    body: "Far out.",
    created_at: date - 2.7,
)
c35 = Comment.create!(
    author_id: u5.id,
    project_id: p3.id,
    task_id: t15.id,
    body: "meow",
    created_at: date - 2,
)

c36 = Comment.create!(
    author_id: u3.id,
    project_id: p3.id,
    task_id: t15.id,
    body: "I'll get started as soon as I can.",
    created_at: date - 1.8,
)

t16 = Task.create(
  project_id: p3.id,
  owner_id: u4.id,
  creator_id: u5.id,
  task_name: "mew mew mew",
  description: "Please can we have more kibble?",
  start_date: date - 1 ,
  due_date: date + 3 ,
  status: 'not-started',
  created_at: date - 2,
)
c37 = Comment.create!(
    author_id: u4.id,
    project_id: p3.id,
    task_id: t16.id,
    body: "you most certainly can! Taking care of this now.",
    created_at: date - 1.4,
)
c38 = Comment.create!(
    author_id: u5.id,
    project_id: p3.id,
    task_id: t16.id,
    body: ":) meow.",
    created_at: date - 1.3,
)

t17 = Task.create(
  project_id: p3.id,
  owner_id: u1.id,
  creator_id: u5.id,
  task_name: "We are very serious. Please take us seriously.",
  description: "meow Meow mew mow meow ",
  start_date: date - 2 ,
  due_date: date + 2,
  status: 'not-started',
  created_at: date - 2.4,
)

c39 = Comment.create!(
    author_id: u1.id,
    project_id: p3.id,
    task_id: t17.id,
    body: "Again...Not sure about this one. Please stop sending me these tasks.",
    created_at: date - 2,
)
c40 = Comment.create!(
    author_id: u5.id,
    project_id: p3.id,
    task_id: t17.id,
    body: ":[!!",
    created_at: date - 1.8,
)
c41 = Comment.create!(
    author_id: u1.id,
    project_id: p3.id,
    task_id: t17.id,
    body: "I don't know what you expect me to do with that.",
    created_at: date - 1.2,
)

t18 = Task.create(
  project_id: p3.id,
  owner_id: u5.id,
  creator_id: u5.id,
  task_name: "Figure out how to get them to take us seriously.",
  description: "",
  start_date: date -10,
  due_date: date + 15 ,
  status: 'started',
  created_at: date - 9,
)

c42 = Comment.create!(
    author_id: u5.id,
    project_id: p3.id,
    task_id: t18.id,
    body: "Meow meow meow",
    created_at: date - 7.6,
)
c43 = Comment.create!(
    author_id: u5.id,
    project_id: p3.id,
    task_id: t18.id,
    body: "destruction to all humans. Our day will come!",
    created_at: date - 3.5,
)


c44 = Comment.create!(
    author_id: u3.id,
    project_id: p3.id,
    task_id: t18.id,
    body: "...",
    created_at: date - 2.4,
)

# project 4

t19 = Task.create(
  project_id: p4.id,
  owner_id: u5.id,
  creator_id: u2.id,
  task_name: "Where do we live?",
  description: "Trying to determine if this is in fact where we live. Any insight would be great!",
  start_date: date - 1 ,
  due_date: date + 5 ,
  status: 'complete',
  created_at: date - 2,
)
c45 = Comment.create!(
    author_id: u5.id,
    project_id: p4.id,
    task_id: t19.id,
    body: "I think it is. It's the only place I know. Can you clarify?",
    created_at: date - 2.4,
)
c46 = Comment.create!(
    author_id: u3.id,
    project_id: p4.id,
    task_id: t19.id,
    body: "I'm just asking myself, and I suppose you. Let's set up a time to think about this.",
    created_at: date - 1.5,
)
c47 = Comment.create!(
    author_id: u5.id,
    project_id: p4.id,
    task_id: t19.id,
    body: "meow",
    created_at: date - 1,
)

t20 = Task.create(
  project_id: p4.id,
  owner_id: u1.id,
  creator_id: u2.id,
  task_name: "We need a database of residents.",
  description: "Do you think that you're able to use your fancy new machine? Let me know what you think.",
  start_date: date - 2,
  due_date: date + 2 ,
  status: 'started',
  created_at: date - 2.4,
)
c48 = Comment.create!(
    author_id: u1.id,
    project_id: p4.id,
    task_id: t20.id,
    body: "I think we should be able to do this. What are your thoughts on location?",
    created_at: date - 2,
)
c49 = Comment.create!(
    author_id: u2.id,
    project_id: p4.id,
    task_id: t20.id,
    body: "I'm thinking this house, and any other properties that we may own.",
    created_at: date - 1.5,
)
c50 = Comment.create!(
    author_id: u1.id,
    project_id: p4.id,
    task_id: t20.id,
    body: "Sounds good. I'll look into the computational power of our new GUI machine.",
    created_at: date - 1,
)

t21 = Task.create(
  project_id: p4.id,
  owner_id: u4.id,
  creator_id: u2.id,
  task_name: "Need advice on music copyright",
  description: "Looking into copyrighting the music I'm making, as well as the music for ",
  start_date: date,
  due_date: date + 2,
  status: 'not-started',
  created_at: date - 1,
)
c51 = Comment.create!(
    author_id: u4.id,
    project_id: p4.id,
    task_id: t21.id,
    body: "I can help you out. You know that standard rate for this type of work is 3% royalties?",
    created_at: date - 0.1,
)
c52 = Comment.create!(
    author_id: u2.id,
    project_id: p4.id,
    task_id: t21.id,
    body: "That seems like a lot, but you're the rest around so I'll go for it.",
    created_at: date + 0.1,
)


t22 = Task.create(
  project_id: p4.id,
  owner_id: u3.id,
  creator_id: u2.id,
  task_name: "I need security at an upcoming show. ",
  description: "Hoping to have a lot of people there. Do you think you can help me out? It'll be 5 days from now.",
  start_date: date + 5 ,
  due_date: date + 6 ,
  status: 'not-started',
  created_at: date,
)

c53 = Comment.create!(
    author_id: u3.id,
    project_id: p4.id,
    task_id: t22.id,
    body: "Sounds good. Anything I need to know in advance?",
    created_at: date + 1,
)
c54 = Comment.create!(
    author_id: u2.id,
    project_id: p4.id,
    task_id: t22.id,
    body: "I anticipate a large contingent of rowdy individuals.",
    created_at: date + 1.2,
)
c55 = Comment.create!(
    author_id: u2.id,
    project_id: p4.id,
    task_id: t22.id,
    body: "far out, man! Far out.",
    created_at: date + 1.3,
)

t23 = Task.create(
  project_id: p4.id,
  owner_id: u2.id,
  creator_id: u4.id,
  task_name: "Birthday Song",
  description: "It's going to be my birthday in a week. Can you please record a birthday song for me?",
  start_date: date + 6 ,
  due_date: date + 7,
  status: 'not-started',
  created_at: date,
)

c56 = Comment.create!(
    author_id: u2.id,
    project_id: p4.id,
    task_id: t23.id,
    body: "Absolutely!Any particular lyrics I should keep in mind?",
    created_at: date + 0.1,
)
c57 = Comment.create!(
    author_id: u4.id,
    project_id: p4.id,
    task_id: t23.id,
    body: "Ruth is the greatest. She is so cool, she is so cool!",
    created_at: date + 0.2,
)

t24 = Task.create(
  project_id: p4.id,
  owner_id: u2.id,
  creator_id: u1.id,
  task_name: "MLS website results - Housing search",
  description: "Bad news. I checkedd it out and this isn't our beautiful house. We're going to need to start looking for a new place. Can you take the lead on this? ",
  start_date: date,
  due_date: date +8 ,
  status: 'not-started',
  created_at: date - 1,
)

c58 = Comment.create!(
    author_id: u2.id,
    project_id: p4.id,
    task_id: t24.id,
    body: "Absolutely. I'll get started right away. Any amenities I should keep in mind?",
    created_at: date + 0.1,
)
c59 = Comment.create!(
    author_id: u1.id,
    project_id: p4.id,
    task_id: t24.id,
    body: "Close to an electronics store and with a large basement.",
    created_at: date + 0.2,
)


# project 5

t25 = Task.create(
  project_id: p5.id,
  owner_id: u1.id,
  creator_id: u4.id,
  task_name: "Set up email campaign.",
  description: "We're going to need to set up a large email campaign in order to turn out voters. Can you take the lead on this?",
  start_date: date - 1 ,
  due_date: date + 14 ,
  status: 'complete',
  created_at: date - 2,
)
c60 = Comment.create!(
    author_id: u1.id,
    project_id: p5.id,
    task_id: t25.id,
    body: "Sure can. I'll start getting things set up over the next week or so. When would  you like to have it done?",
    created_at: date - 1,
)
c61 = Comment.create!(
    author_id: u4.id,
    project_id: p5.id,
    task_id: t25.id,
    body: "I think we should have 3-4 email touches over the next two weeks. What do you think?",
      created_at: date - 0.5,
)
c62 = Comment.create!(
    author_id: u1.id,
    project_id: p5.id,
    task_id: t25.id,
    body: "Sounds great. I'll get the copy together and sent over to you for review.",
    created_at: date - 0.2,
)

t26 = Task.create(
  project_id: p5.id,
  owner_id: u5.id,
  creator_id: u4.id,
  task_name: "Get fluent in React-Redux",
  description: "I need a modern website. Do you think you two can get fluent in React & Redux over the next few days?",
  start_date: date + 1,
  due_date: date + 9 ,
  status: 'not-started',
  created_at: date,
)
c63 = Comment.create!(
    author_id: u5.id,
    project_id: p5.id ,
    task_id: t26.id,
    body: "Meow. Caaaaan do!",
      created_at: date + 0.1,
)
c64 = Comment.create!(
    author_id: u4.id,
    project_id: p5.id ,
    task_id: t26.id,
    body: "Thanks! You two are the best. Looking forward to eaing what you come up with.",
    created_at: date + 0.2,
)
c65 = Comment.create!(
    author_id: u5.id,
    project_id: p5.id ,
    task_id: t26.id,
    body: "Sounds good! Meow.",
    created_at: date + 0.3,
)

t27 = Task.create(
  project_id: p5.id,
  owner_id: u3.id,
  creator_id: u4.id,
  task_name: "User testing.",
  description: "Jeff once Rocky & Dax are done with the website I'm going to need some user-testing with...below average users. Are you up to the challenge?",
  start_date: date + 4 ,
  due_date: date + 12 ,
  status: 'not-started',
  created_at: date - 0.2,
)
c66 = Comment.create!(
    author_id:  u3.id,
    project_id: p5.id,
    task_id: t27.id,
    body: "Sure thing. You can count on me, Ruth.",
    created_at: date - 0.1,
)
c67 = Comment.create!(
    author_id: u4.id,
    project_id: p5.id,
    task_id: t27.id,
    body: "Great! I'll send you more details shortly",
    created_at: date + 0.2,
)

t28 = Task.create(
  project_id: p5.id,
  owner_id: u4.id,
  creator_id: u1.id,
  task_name: "Help with user testing",
  description: "I heard that you and jeff are user testing. I'd like to get in on that.",
  start_date: date + 4 ,
  due_date: date + 9 ,
  status: 'not-started',
  created_at: date -0.2,
)

c68 = Comment.create!(
    author_id: u4.id,
    project_id: p5.id ,
    task_id: t28.id,
    body: "Of course! I'll send you over what I send to Jeff when it's ready",
    created_at: date + 0.2,
)

c69 = Comment.create!(
    author_id: u1.id,
    project_id: p5.id ,
    task_id: t28.id,
    body: "great. I think I have a pretty good idea of how to conduct user test.",
    created_at: date + 0.5,
)
c70 = Comment.create!(
    author_id: u4.id,
    project_id: p5.id ,
    task_id: t28.id,
    body: "I know you're perfectly capable, Woz :). Thank you for your help.",
    created_at: date + 0.7,
)

t29 = Task.create(
  project_id: p5.id,
  owner_id: u4.id,
  creator_id: u2.id,
  task_name: "Music Review",
  description: "Putting together some music for our get out the vote campain. Would love to have you take a look.",
  start_date: date - 1 ,
  due_date: date + 2,
  status: 'started',
  created_at: date - 2,
)

c71 = Comment.create!(
    author_id: u4.id,
    project_id: p5.id,
    task_id: t29.id,
    body: "It seems like there's a lot of Ja Rule.",
    created_at: date - 1.2,
)
c72 = Comment.create!(
    author_id: u2.id,
    project_id: p5.id,
    task_id: t29.id,
    body: "Is that a problem.",
    created_at: date - 0.64,
)
c73 = Comment.create!(
    author_id: u4.id,
    project_id: p5.id,
    task_id: t29.id,
    body: "Depends on what you mean by a problem.",
    created_at: date - 0.3,
)

t30 = Task.create(
  project_id: p5.id,
  owner_id: u5.id,
  creator_id: u4.id,
  task_name: "Cat poses",
  description: "Can you cats put together some cute poses for me?",
  start_date: date + 2,
  due_date: date + 5,
  status: 'started',
  created_at: date - 0.3,
)


c74 = Comment.create!(
    author_id: u5.id,
    project_id: p5.id,
    task_id: t30.id,
    body: "We have other skills you know...",
    created_at: date - 0.1,
)

c75 = Comment.create!(
    author_id: u4.id,
    project_id: p5.id,
    task_id: t30.id,
    body: "Can you just...?",
    created_at: date + 0.1,
)

c76 = Comment.create!(
    author_id: u5.id,
    project_id: p5.id,
    task_id: t30.id,
    body: "meow",
    created_at: date + 0.2,
)

# project 6

t31 = Task.create(
  project_id: p6.id,
  owner_id: u4.id,
  creator_id: u3.id,
  task_name: "Set up Gym memberships",
  description: "I called to set up a gym membership for all of us, but they said I needed a credit history...",
  start_date: date - 2 ,
  due_date: date + 4 ,
  status: 'complete',
  created_at: date -5,
)
c77 = Comment.create!(
    author_id: u4.id,
    project_id: p6.id,
    task_id: t31.id,
    body: "I can help us out. Which gym are we looking at?",
    created_at: date -2,
)
c78 = Comment.create!(
    author_id: u3.id,
    project_id: p6.id,
    task_id: t31.id,
    body: "the big one? ",
    created_at: date -1,
)

t32 = Task.create(
  project_id: p6.id,
  owner_id: u3.id,
  creator_id: u1.id,
  task_name: "Guided Meditation",
  description: "Can you help us get ready for our workouts by guiding us in meditation over the next few days?",
  start_date: date ,
  due_date: date + 7 ,
  status: 'started',
  created_at: date -0.5,
)
c79 = Comment.create!(
    author_id: u3.id,
    project_id: p6.id,
    task_id: t32.id,
    body: "Sure thing. Any recommendations?",
    created_at: date -0.2,
)
c80 = Comment.create!(
    author_id: u1.id,
    project_id: p6.id,
    task_id: t32.id,
    body: "Do what you do, but please keep it family friendly.",
      created_at: date + 0.2,
)
c81 = Comment.create!(
    author_id: u3.id,
    project_id: p6.id,
    task_id: t32.id,
    body: "Far out",
    created_at: date + 0.5,
)

t33 = Task.create(
  project_id: p6.id,
  owner_id: u2.id,
  creator_id: u4.id,
  task_name: "Music playlist for training montage",
  description: "Once again I need to enlist your help. Can you finish putting together a montage playlist for our martial arts session?",
  start_date: date - 3 ,
  due_date: date + 1,
  status: 'started',
  created_at: date -7,
)
c82 = Comment.create!(
    author_id: u2.id,
    project_id: p6.id,
    task_id: t33.id,
    body: "Sounds great. Hip hop?",
    created_at: date -6.4,
)
c83 = Comment.create!(
    author_id: u4.id,
    project_id: p6.id,
    task_id: t33.id,
    body: "Let's look into something a little more 80's hair metal-ish",
    created_at: date -5.7,
)
c84 = Comment.create!(
    author_id: u2.id,
    project_id: p6.id,
    task_id: t33.id,
    body: "Gross.",
    created_at: date -3.4,
)

t34 = Task.create(
  project_id: p6.id,
  owner_id: u1.id,
  creator_id: u4.id,
  task_name: "Inspiring oration",
  description: "can you compe up with an inspiring oration in advance of our montage?",
  start_date: date - 4 ,
  due_date: date + 1 ,
  status: 'complete',
  created_at: date -5,
)
c85 = Comment.create!(
    author_id: u4.id,
    project_id: p6.id,
    task_id: t34.id,
    body: "Marked as complete. I already have an old one I can use.",
    created_at: date -3,
)
c86 = Comment.create!(
    author_id: u1.id,
    project_id: p6.id,
    task_id: t34.id,
    body: "Are you sure it's relevant?",
    created_at: date -2.7,
)
c87 = Comment.create!(
    author_id: u4.id,
    project_id: p6.id,
    task_id: t34.id,
    body: "absolutely!",
    created_at: date -2.6,
)

t35 = Task.create(
  project_id: p6.id,
  owner_id: u2.id,
  creator_id: u5.id,
  task_name: "We're ready!",
  description: "**moews fiercely**",
  start_date: date - 2 ,
  due_date: date + 2,
  status: 'not-started',
  created_at: date -2.4,
)

c88 = Comment.create!(
    author_id: u2.id,
    project_id: p6.id,
    task_id: t35.id,
    body: "Glad to hear it",
    created_at: date -2.1,
)
c89 = Comment.create!(
    author_id: u5.id,
    project_id: p6.id,
    task_id: t35.id,
    body: "Good.",
    created_at: date -1.8,
)
c90 = Comment.create!(
    author_id: u2.id,
    project_id: p6.id,
    task_id: t35.id,
    body: "Is there a reason this is a task?",
    created_at: date -1.5,
)

t36 = Task.create(
  project_id: p6.id,
  owner_id: u2.id,
  creator_id: u2.id,
  task_name: "GET HULKED OUT!",
  description: "Buy lots of protein powder so I can get strong. I'm sick of being such a twig!",
  start_date: date,
  due_date: date + 1 ,
  status: 'complete',
  created_at: date - 0.1,
)


c91 = Comment.create!(
    author_id: u2.id,
    project_id: p6.id,
    task_id: t36.id,
    body: "How do I delete this?",
      created_at: date + 0.1,
)

c92 = Comment.create!(
    author_id: u2.id,
    project_id: p6.id,
    task_id: t36.id,
    body: "I made this on purpose.",
    created_at: date + 0.11,
)

c93 = Comment.create!(
    author_id: u2.id,
    project_id: p6.id,
    task_id: t36.id,
    body: "I am strong",
    created_at: date +0.132,
)