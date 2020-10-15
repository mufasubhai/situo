export const fetchComments = () => (
    $.ajax({
        method: 'GET',
        url: '/api/comments',
    })
)

export const fetchComment = id => (
    $.ajax({
        method: 'GET',
        url: `/api/comments/${id}`
    })
)

export const createComment = comment => {
    
 return   $.ajax({
        method: 'POST',
        url: `/api/comments`,
        data: { comment }
    })
}

export const updateComment = comment => (
    $.ajax({
        method: 'PATCH',
        url: `/api/comments/${comment.id}`,
        data: { comment }
    })
)

export const deleteComment = commentId => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`,
        data: commentId
    })
}