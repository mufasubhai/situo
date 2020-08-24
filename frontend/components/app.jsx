import React from "react";
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SplashPage from './splash_page/splash_page'
import TopNavContainer from './top_nav/top_nav_container'
import SideNavContainer from './side_nav/side_nav_container'
import HomeContainer from './home/home_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => (
    <div className="rootdiv">
        <Switch>
            <AuthRoute exact path='/' component={SplashPage} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <ProtectedRoute exact path="/home" component={HomeContainer} />

        
            <Route render={() => <Redirect to="/" />} />
        </Switch>
    </div>

   
);

{/* <Switch>
    <AuthRoute path="/project/tasklist/:projectId" component={ProjectListContainer} />
    <AuthRoute path="/project/taskcal/:projectId" component={ProjectCalContainer} />
    <AuthRoute path="/tasklist/:userId" component={UserListContainer} />
    <AuthRoute path="/taskcak/:userId" component={UserCalContainer} />
</Switch> */}
export default App;
