import React from 'react';

class TopNav extends React.Component {

    render() {
        return (
            <div className="topnav">
                <h1 className="label">Home</h1>


                
                <button onClick={this.props.logout}>Logout</button>

            </div>
        )
            
    }
}

export default TopNav;
