import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TopNav from './top_nav';
import { logout } from '../../actions/session_actions';


const mSTP = state => ({
    
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(TopNav)