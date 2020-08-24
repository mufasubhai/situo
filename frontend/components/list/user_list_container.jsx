import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import UserList from './user_list'
import { fetchTasks } from '../../actions/task_actions'


const mSTP = state => ({
    userId: state.session.id,
    user: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks())
});




export default connect(mSTP, mDTP)(UserList)