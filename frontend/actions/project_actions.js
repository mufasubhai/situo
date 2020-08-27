import * as ProjectAPIUtil from '../util/project_api_util'
import {closeModal} from './modal_actions'

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS ="RECEIVE_PROJECT_ERRORS"
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


const receiveErrors = errors => ({
    type: RECEIVE_PROJECT_ERRORS,
    errors
})

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
        .then(projects => (dispatch(receiveProjects(projects))     
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const fetchProject = project => dispatch => (
    ProjectAPIUtil.fetchProject(project)
        .then(project => (dispatch(receiveProject(project))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)

export const createProject = project => dispatch => {
    debugger
return     ProjectAPIUtil.createProject(project)
        .then(project => (dispatch(receiveProject(project))
        ), err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
}
export const updateProject = project => dispatch => (
    ProjectAPIUtil.updateProject(project)
        .then(
            project => {
                dispatch(receiveProject(project));
                dispatch(closeModal());
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
)
export const deleteProject = projectId => dispatch => (
    ProjectAPIUtil.deleteProject(projectId)
        .then(
            () => {
                dispatch(closeModal());
                dispatch(removeProject(projectId));
            })
)