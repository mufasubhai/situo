import React from 'react';
import { Link } from 'react-router-dom';
import SideNavContainer from '../side_nav/side_nav_container';
import TopNavContainer from '../top_nav/top_nav_container';


class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
        this.props.fetchTasks()
    }

    render () {
        return (
            <span className="situo_full_page">
                <SideNavContainer />

                <span className="right_page_content">
                    <TopNavContainer />
                   
                    <div className="main_content">
                
                         <div>{this.props.match.params.projectId}</div>
                    </div>  
                </span>

            </span> 
        )

    }

}

export default ProjectList