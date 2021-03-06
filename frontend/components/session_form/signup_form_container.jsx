import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return {
    errors: errors.session,
    formType: "Sign Up",
    navLink: <Link to="/login">Log In</Link>,
    navLinkPhrase: 'Already have an account?'
    };
};

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(clearErrors()),
        demoStart: (user) => dispatch(login(user))
    };
}

export default connect(mSTP, mDTP)(SessionForm)

