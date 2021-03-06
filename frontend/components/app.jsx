import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashPage from './splash_page/splash_page';
import HomeContainer from './home/home_container';
import ProjectListContainer from '../components/list/project_list_container';
import UserListContainer from '../components/list/user_list_container';
import CreateProjectFormContainer from '../components/projects/create_project_form_container';
import ProjectCalendarContainer from '../components/calendar/project_calendar_container';
import UserCalendarContainer from '../components/calendar/user_calendar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';




const App = () => (
    <div>
        <Modal />
        <Switch>
            <AuthRoute exact path='/' component={SplashPage} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <ProtectedRoute path="/project/new" component={CreateProjectFormContainer} />
            <ProtectedRoute path="/tasklist/project/:projectId" component={ProjectListContainer} />
            <ProtectedRoute path="/calendar/project/:projectId" component={ProjectCalendarContainer} />
            <ProtectedRoute path="/calendar/user/:userId" component={UserCalendarContainer} />
            <ProtectedRoute path="/tasklist/user/:userId" component={UserListContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />

        
            <Route render={() => <Redirect to="/" />} />
        </Switch>
    </div>

   
);

{/* <Switch>
    <AuthRoute path="/tasklist/project/:projectId" component={ProjectListContainer} />
    <AuthRoute path="/taskcal/user/:projectId" component={ProjectCalContainer} />
    <AuthRoute path="/tasklist/:userId" component={UserListContainer} />
    <AuthRoute path="/taskcak/:userId" component={UserCalContainer} />
</Switch> */}
export default App;
