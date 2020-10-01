import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Calendar from './calendar'


const mSTP = (state) => ({
  tasks: Object.values(state.entities.tasks),
  id: state.session.id,
});

const mDTP = (dispatch) => ({
  fetchTasks: () => dispatch(fetchTasks()),
  fetchTask: (taskId) => dispatch(fetchTask(taskId)),
  createTask: (task) => dispatch(createTask(task)),
  deleteTask: (taskId) => dispatch(deleteTask(taskId)),
  updateTask: (taskId) => dispatch(updateTask(taskId)),
});




export default connect(mSTP, mDTP)(Calendar)