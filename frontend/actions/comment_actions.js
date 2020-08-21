import * as CommentAPIUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS"
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
})

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const fetchComments = () => dispatch => (
    CommentAPIUtil.fetchComments()
        .then(comments => (dispatch(receiveComments(comments))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const fetchComment = comment => dispatch => (
    CommentAPIUtil.fetchcomment(comment)
        .then(comment => (dispatch(receiveComment(comment))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment)
        .then(comment => (dispatch(receiveComment(comment))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const updateComment = comment => dispatch => (
    CommentAPIUtil.updateComment(comment)
        .then(comment => (dispatch(receiveComment(comment))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const deleteComment = commentId => dispatch => (
    CommentAPIUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)))
)