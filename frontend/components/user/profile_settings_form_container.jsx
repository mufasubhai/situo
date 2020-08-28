import React from 'react';
import {Link, withConnect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import { openModal, closeModal } from '../../actions/modal_actions'

class ProfileSettingsForm extends React.Component {
    constructor(props) {
        super(props)

    }
            handleChange(field) {
            return e => { this.setState({ [field]: e.target.value }) }
            }
    render () {
        return (
            <div className="modal_container">

                <span className="modal_top">
                    <h1 className="edit_title">Profile Settings</h1>

                    <div className="modal_close_trigger" onClick={() => this.props.closeModal()}>
                        <svg className="x_arrow_svg" focusable="false" viewBox="0 0 32 32"><path className="x_arrow_svg" d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path></svg>
                    </div>

                </span>

                <span className="project_edit_bottom">

                    <label className="modal_label" >Name
                    <span className="spacer"></span>
                        <input type="text" className="project_name_update text_input" value={""} onChange={this.handleChange('')} />
                    </label>
                    <label className="modal_label" >Password
                    <span className="spacer"></span>
                        <input type="password" className="project_name_update text_input" value={""} onChange={this.handleChange('')} />
                    </label>

                

                    <div className="update-project-modal-button">
                        <button className="edit_project" >Update Profile
                    </button>
                    </div>
                </span>



            </div>
        )
    }
}

const mSTP = state => ({

});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(ProfileSettingsForm))