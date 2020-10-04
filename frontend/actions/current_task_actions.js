export const SET_CURRENT_TASK = "SET_CURRENT_TASK";

export const setTask = currentTaskId => ({
    type: SET_CURRENT_TASK,
    currentTaskId
})