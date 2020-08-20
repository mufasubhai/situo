import * as ProjectAPIUtil from '../util/project_api_util'

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects
})

const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
})

const removeProject = projectId => ({
    type: REMOVE_PROJECT,
    projectId
})

export const fetchProjects = () => dispatch => (
    ProjectAPIUtil.fetchProjects()
        .then(projects => dispatch(receiveProjects(projects)))
)

export const fetchProject = project => dispatch => (
    ProjectAPIUtil.fetchProject(project)
        .then(project => dispatch(receiveProject(project)))
)
export const createProject = project => dispatch => (
    ProjectAPIUtil.createProject(project)
        .then(project => dispatch(receiveProject(project)))
)
export const fetchProject = project => dispatch => (
    ProjectAPIUtil.updateProject(project)
        .then(project => dispatch(receiveProject(project)))
)
export const fetchProject = project => dispatch => (
    ProjectAPIUtil.fetchProject(project)
        .then(project => dispatch(removeProject(project)))
)