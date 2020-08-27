import React from 'react';
import {Link, withConnect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'


class ProfileSettingsForm extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>React form Container</div>
        )
    }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({

})

export default withRouter(connect(mSTP, mDTP)(ProfileSettingsForm))