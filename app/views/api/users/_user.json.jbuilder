## partial
json.extract! user, :id, :email, :name, :bio
json.photoUrl url_for(user.photo)