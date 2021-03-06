import React from 'react';
import {Link, withConnect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import { updateUser, updateUserPhoto } from '../../actions/user_actions'

class ProfileSettingsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.photoUpload = React.createRef()
    }

    componentDidMount() {
        this.setState({password2: "", password3: ""})
    }

    handleChange(field) {
        return e => { this.setState({ [field]: e.target.value }) }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();


        fileReader.onloadend = () => {   
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
            
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (this.state.photoFile) {

            // if (this.state.password2 !== this.state.password3) {
            //     alert('Passwords must match')
            // } else {
                formData.append('user[photo]', this.state.photoFile)
                // formData.append('user[password]', this.state.password)
                formData.append('user[bio]', this.state.bio)
                formData.append('user[name]', this.state.name)
                this.props.updateUserPhoto(this.props.user.id, formData);

            // }

        } else {
            // if (this.state.password2 !== this.state.password3) {
            //     alert('Passwords must match')
            // } else {

                this.props.updateUser(this.state)
            // }
        }
        

    }


    render () {
        return (
          <div className="modal_container">
            <span className="modal_top  user_modal">
              <h1 className="edit_title">Profile Settings</h1>

              <div
                className="modal_close_trigger"
                onClick={() => this.props.closeModal()}
              >
                <svg
                  className="x_arrow_svg"
                  focusable="false"
                  viewBox="0 0 32 32"
                >
                  <path
                    className="x_arrow_svg"
                    d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"
                  ></path>
                </svg>
              </div>
            </span>

            <span className="project_edit_bottom">
              <label className="modal_label">
                Name
                <span className="spacer"></span>
                <input
                  type="text"
                  className="project_name_update text_input"
                  value={this.state.name}
                  onChange={this.handleChange("name")}
                />
              </label>
              <label className="modal_label">
                Bio
                <span className="spacer"></span>
                <textarea
                  
                  className="project_name_update text_input bio_update"
                  value={this.state.bio}
                  onChange={this.handleChange("bio")}
                />
              </label>
              <label className="modal_label">Current Profile Photo:
              <img
                            className="profile_photo_preview"
                            src={this.state.photoUrl}
                            />

              </label>
              {/* <label className="modal_label">
                Password
                <span className="spacer"></span>
                <input
                  type="password"
                  className="project_name_update text_input"
                  value={this.state.password}
                  onChange={
                    (this.handleChange("password"),
                    this.handleChange("password2"))
                  }
                />
              </label>
              <label className="modal_label">
                Confirm Password
                <span className="spacer"></span>
                <input
                  type="password"
                  className="project_name_update text_input"
                  value={this.state.password}
                  onChange={
                    (this.handleChange("password3"))
                  }
                />
              </label> */}
              <label className="modal_label">
                Upload photo
                <span className="spacer"></span>
                <input
                  className="update-project-modal-button edit_project"
                  type="file"
                  onChange={this.handleFile}
                />
              </label>

              <div className="update-project-modal-button">
                <button className="edit_project" onClick={this.handleSubmit}>
                  Update Profile
                </button>
              </div>
            </span>
          </div>
        );
    }
}

const mSTP = (state, ownProps) => ({
    user: state.entities.users[state.session.id],
    userId: state.session.id
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateUser: (userId) => dispatch(updateUser(userId)),
    updateUserPhoto: (userId, photo) => dispatch(updateUserPhoto(userId, photo))
})

export default withRouter(connect(mSTP, mDTP)(ProfileSettingsForm))