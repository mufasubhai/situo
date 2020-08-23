import React from 'react';
import SideNavContainer from "../side_nav/side_nav_container"
import TopNavContainer from "../top_nav/top_nav_container"
import ProjectIndexContainer from "../projects/project_index_container"
import TaskIndexContainer from "../tasks/task_index_container"

class Home extends React.Component {

    render() {
        return (

            
            <span className="situo_full_page">
                <SideNavContainer/>

            <span className="right_page_content">
             <TopNavContainer/>
             <div className="main_content">
                <div className="home_index_title">Tasks Due Soon</div>
                <TaskIndexContainer />
                <div className="home_index_title">Recent Projects</div>
                <span></span>
                <ProjectIndexContainer/>
             
            </div>   

            </span>

            </span>
            
        )
    }
}

export default Home;


// add TaskIndexContainer
// add ProjectIndexContainer