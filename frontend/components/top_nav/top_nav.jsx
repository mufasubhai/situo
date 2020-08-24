import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.revealNav = this.revealNav.bind(this);
        this.menuClick = this.menuClick.bind(this)
        

        
    }

    componentDidMount() {
        const parts = this.props.match.path.split('/');
        const last = parts.pop();
        const secondLast = parts.pop();
        (secondLast === 'project') ? this.props.fetchProject(last) : null
    }

    revealNav() {
        const nav = document.getElementById('situo_sidebar');
        const burger = document.getElementById('burger_logo_2');
        const burgerbutton = document.getElementById('hidden_burger');
        const leftPad = document.getElementById('right_page_content');
        leftPad.style.paddingLeft = '240px'
        nav.style.marginLeft = '0px';
        burger.style.display = "none"
        burgerbutton.style.display = "none"
    }

    menuClick() {
        const menu = document.getElementById('top_nav_dropdown');
       
        menu.style.display === "none" ? menu.style.display = "block" : menu.style.display = "none";
    }

    render() {
        const parts = this.props.match.path.split('/');
        const last = parts.pop();
        const secondLast = parts.pop();
        

        return (
            <div className="topnav">
                
                <span className="left_top_nav">
                    <button id="hidden_burger" onClick={this.revealNav}>
                        <svg id="burger_logo_2" viewBox="0 0 50 32">
                            <path d="M49,4H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,4,49,4z"></path>
                            <path d="M49,16H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,16,49,16z"></path>
                            <path d="M49,28H19c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S49.6,28,49,28z"></path>
                        </svg>
                    </button>
                    {
                        this.props.match.path.includes('home') ? <h1 className="label">Home</h1> : null
                    }
                    {
                        (secondLast === 'user') ? 
                        <span>
                            <h1 className="label">{this.props.user.name}
                                    <Link to={`/tasklist/user/${last}`} className="topLink">List</Link>
                                    <Link to={`/taskcal/user/${last}`} className="topLink">Calendar</Link>  
                            </h1>
                        </span> : null
                    }
                    {
                        (secondLast === 'project' && (this.props.currentProject)) ? 
                        <span>
                            <h1 className="label">{this.props.currentProject.project_name}
                                    <Link to={`/tasklist/project/${last}`} className="topLink">List</Link>
                                    <Link to={`/taskcal/project/${last}`} className="topLink">Calendar</Link>  
                            </h1>
                        </span> : null
                    }
                </span>

                <span className="right_top_nav">
                   
                    
                    <button className="menu_button" onClick={this.menuClick}> Menu

                        <ul id="top_nav_dropdown" >
                            <li className="dropdown_item" id="profile_settings_link">My Profile Settings...</li>
                            <li className="dropdown_item"><a href="emailto:aapodaca@gmail.com">Contact</a></li>
                            <li className="dropdown_item" onClick={this.props.logout}>Logout</li> 
                        </ul>
                    </button>
                </span>

            </div>
        )
            
    }
}

export default TopNav;
