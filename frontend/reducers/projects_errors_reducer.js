import {
    CLEAR_ERRORS,
    RECEIVE_PROJECT_ERRORS
} from '../actions/project_actions'


export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROJECT_ERRORS:
            return []
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};
