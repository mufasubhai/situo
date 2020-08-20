import React from 'react';
import SideNavContainer from "../side_nav/side_nav_container"
import TopNavContainer from "../top_nav/top_nav_container"

class Home extends React.Component {

    render() {
        return (
            <div>
            <TopNavContainer/>
            <p>Home Page</p>
            <SideNavContainer/>


        </div>

        )
    }
}

export default Home;


// add TaskIndexContainer
// add ProjectIndexContainer