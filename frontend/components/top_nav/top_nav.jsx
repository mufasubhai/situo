import React from 'react';

class TopNav extends React.Component {

    render() {
        return (
            <div>
                <p> this is the top nav</p>
                <button onClick={this.props.logout}>Logout</button>

            </div>
        )
            
    }
}

export default TopNav;
