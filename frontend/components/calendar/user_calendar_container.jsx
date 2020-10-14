import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Calendar from './calendar'
import {
  fetchTasks,
  deleteTask,
  fetchTask,
  createTask,
  updateTask,
} from "../../actions/task_actions";
import { setTask } from "../../actions/current_task_actions";
import { openModal, closeModal } from "../../actions/modal_actions";


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
    closeModal: () => dispatch(closeModal()),
  setTask: (taskId) => dispatch(setTask(taskId)),
  openModal: (modal) => dispatch(openModal(modal)),
});




export default connect(mSTP, mDTP)(Calendar)