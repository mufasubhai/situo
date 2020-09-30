export const fetchUsers = () => (
    $.ajax({
        method: 'GET',
        url: 'api/users'
    })
)

export const fetchUser = (userId) => (
    $.ajax({
        method: 'GET',
        url: `api/users/${userId}`
    })
)

export const updateUser = (user) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: { user }
    })
)


export const updateUserPhoto = (userId, photo) => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: "PATCH",
    data: photo,
    contentType: false,
    processData: false,
  });
};