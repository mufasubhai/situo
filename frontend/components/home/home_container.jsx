import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import Home from './home';

const mSTP = state => ({

});

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Home)