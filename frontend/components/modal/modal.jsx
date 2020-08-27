import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditProjectFormContainer from '../../components/projects/edit_project_form_container'
import DeleteProjectFormContainer from '../../components/projects/delete_project_form_container'
import ProfileSettingsFormContainer from '../../components/user/profile_settings_form_container'
function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'edit_project':
            component = <EditProjectFormContainer />;
            break;
        case 'delete_project':
            component = <DeleteProjectFormContainer />;
            break;
        case 'profile_settings':
            component = <ProfileSettingsFormContainer />;
            break;
                   // case 'new_task':
        //     component = <NewTaskFormContainer />;
        //     break;
        // case 'edit_task':
        //     component = <EditTaskFormContainer />;
        //     break;
        default:
            return null;
    }
    return (
        <div className="modal_background" onClick={closeModal}>
            <div className="modal_child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
