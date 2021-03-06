import { connect } from 'react-redux'
import TaskIndex from './task_index';
import { fetchTasks, deleteTask, fetchTask, createTask, updateTask } from '../../actions/task_actions';
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = state => ({
    tasks: Object.values(state.entities.tasks),
    id: state.session.id
});

const mDTP = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks()),
    fetchTask: (taskId) => dispatch(fetchTask(taskId)),
    createTask: (task) => dispatch(createTask(task)),
    deleteTask: (taskId) => dispatch(deleteTask(taskId)),
    updateTask: (taskId) => dispatch(updateTask(taskId)),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(TaskIndex)