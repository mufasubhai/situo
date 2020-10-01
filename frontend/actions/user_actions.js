export const RECEIVE_USERS = "RECEIVE_USERS"
export const RECEIVE_USER = "RECEIVE_USER"
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS"

import * as UserAPIUtil from '../util/user_api_util'
import { closeModal } from './modal_actions'

const receiveErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
}) 
const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = () => dispatch => (
    UserAPIUtil.fetchUsers()
        .then(users => (dispatch(receiveUsers(users))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const fetchUser = user => dispatch => (
    UserAPIUtil.fetchUser(user)
        .then(user => (dispatch(receiveUser(user))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const updateUser = user => dispatch => (
    UserAPIUtil.updateUser(user)
        .then(
            user => {
                dispatch(receiveUser(user));
                dispatch(closeModal());
            }
            , err => (
                dispatch(receiveErrors(err.responseJSON))
            ))
)

export const updateUserPhoto = (userId, photo) => (dispatch) => {
  return UserAPIUtil.updateUserPhoto(userId, photo)
    .then(user => { dispatch(receiveUser(user))
                    dispatch(closeModal()); }
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    )
};
