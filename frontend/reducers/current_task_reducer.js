import SET_CURRENT_TASK from "../actions/current_task_actions"
const currentTaskReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case "SET_CURRENT_TASK":

      return {id: action.currentTaskId};
    default:
      return state;
  }
};

export default currentTaskReducer;