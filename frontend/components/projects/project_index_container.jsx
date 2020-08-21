import {connect} from 'react-redux'
import ProjectIndex from './project_index';
import {fetchProjects, deleteProject, fetchProject, createProject, updateProject} from '../../actions/project_actions';

const mSTP = state => ({
    projects: Object.values(state.entities.projects)
});

const mDTP = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
    createProject: (project) => dispatch(createProject(project)),
    deleteProject: (projectId) => dispatch(deleteProject(projectId)),
    updateProject: (projectId) => dispatch(updateProject(projectId)),
});

export default connect(mSTP, mDTP)(ProjectIndex)