## partial
json.extract! user, :id, :email, :name
json.photoUrl url_for(user.photo)