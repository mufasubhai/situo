import {
    CLEAR_ERRORS,
    RECEIVE_COMMENT_ERRORS
} from '../actions/comment_actions'


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return []
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};
