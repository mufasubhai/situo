import {
    CLEAR_ERRORS,
    RECEIVE_USER_ERRORS
} from '../actions/user_actions'


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors
        case CLEAR_ERRORS:
            return [];
        default:

            return state;
    }
};