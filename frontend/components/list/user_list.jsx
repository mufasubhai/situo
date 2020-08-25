import React from 'react';
import { Link } from 'react-router-dom';
import SideNavContainer from '../side_nav/side_nav_container';
import TopNavContainer from '../top_nav/top_nav_container';


class UserList extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchTasks()
    }

    render() {
        return (
            <span className="situo_full_page">
                <div className="left_page_content">
                    <SideNavContainer />

                </div>

                <span className="right_page_content" id="right_page_content">
                    <TopNavContainer />
                    <div className="main_content">

                        <div>{this.props.user.name}</div>
                    </div>
                </span>

            </span>
        )

    }

}

export default UserList