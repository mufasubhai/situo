import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import TaskForm from './task_form'
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchTask, fetchTasks, updateTask, deleteTask} from "../../actions/task_actions"
import { fetchComment, fetchComments, updateComment, deleteComment, createComment } from "../../actions/comment_actions"
import {fetchUsers } from "../../actions/user_actions"


const mSTP = (state) => ({
  currentTaskId: state.entities.currentTask.id,
  comments: Object.values(state.entities.comments),
  users: Object.values(state.entities.users),
  tasks: state.entities.tasks,
  tasksObjects: Object.values(state.entities.tasks),
  userId: state.session.id,
  comment: {
    body: "",
    task_id: state.entities.currentTask.id,
    author_id: state.session.id
  },
});


const mDTP = dispatch => ({
    fetchTask: taskId => dispatch(fetchTask(taskId)),
    fetchTasks: () => dispatch(fetchTasks()),
    updateTask: taskId => dispatch(updateTask(taskId)),
    deleteTask: taskId => dispatch(deleteTask(taskId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    fetchComments: () => dispatch(fetchComments()),
    createComment: comment => dispatch(createComment(comment)),
    updateComment: commentId => dispatch(updateComment(commentId)),
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mSTP, mDTP)(TaskForm)