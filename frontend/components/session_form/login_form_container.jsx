import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log In',
        navLink: <Link to="/signup">Sign Up</Link>,
        navLinkPhrase: "Don't have an account?"  
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoStart: (user) => dispatch(login(user))

    };
}

export default connect(mSTP, mDTP)(SessionForm)
