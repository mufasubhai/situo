import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import TaskForm from './task_form'
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchTask, fetchTasks, updateTask, deleteTask} from "../../actions/task_actions"
import { fetchComment, fetchComments, updateComment, deleteComment, createComment } from "../../actions/comment_actions"



const mSTP = state => ({
    currentTaskId: state.entities.currentTask.id,
    comments: state.entities.comments

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
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(TaskForm)