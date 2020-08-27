# @users.each do |user|
#     json.set! user.id do
#         json.partial! "api/users/user", user: user
#     end
# end


json.array! @users do |user| 
  json.partial! "api/users/user", user: user
end 