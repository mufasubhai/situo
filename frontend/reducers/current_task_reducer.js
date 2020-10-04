
import SET_CURRENT_TASK from '../actions/current_task_actions';

const currentTaskReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger
  switch (action.type) {
    case SET_CURRENT_TASK:
      return Object.assign({}, state, action.taskId);
    default:
      return state;
  }
};
export default currentTaskReducer;