import React from 'react';
import { Link } from 'react-router-dom';
import { deleteProject } from '../../util/project_api_util';


class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.revealNav = this.revealNav.bind(this);
        this.menuClick = this.menuClick.bind(this);

        this.deleteAction = this.deleteAction.bind(this);
        this.editClick = this.editClick.bind(this)
    }

    componentDidMount() {
        const parts = this.props.match.path.split('/');
        const secondLast = parts.pop();
        (secondLast === 'project') ? this.props.fetchProject(this.props.currentProject.id) : null
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

    deleteAction() {
        this.props.deleteProject(this.props.currentProject.id);
        this.props.history.push('/home');
    }

    // }

    menuClick() {
        const menu = document.getElementById('top_nav_dropdown');
        menu.style.display === "none" ? menu.style.display = "block" : menu.style.display = "none";
    }

    editClick() {
        const dropDown = document.getElementById('modal_dropdown')
        dropDown.style.display === "none" ? dropDown.style.display = "block" : dropDown.style.display = "none";
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
                        this.props.match.path.includes('home') ? <h1 className="label_2">Home</h1> : null
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
                            <span className="header_wrapper">

                                <div className="project_title">
                                    <svg className="project_tile_logo" viewBox="-11 -11 46 46" title="list" services="[object Object]">
                                        <path className="comp_top" d="M0 4C0 2.89543 0.895431 2 2 2H22C23.1046 2 24 2.89543 24 4V15H0V4Z"></path>
                                        <path className="comp_bottom" d="M24 15H0V17C0 18.1046 0.89543 19 2 19H8L7 22H17L16 19H22C23.1046 19 24 18.1046 24 17V15Z">
                                        </path>
                                    </svg> 
                                </div>        

                                    <span>
                                            <span className="project_top_line">

                                                <h1 className="project_name_label">{this.props.currentProject.project_name}</h1>


                                                <button className="modal_dropdown_trigger" onClick={this.editClick}>
                                                        <span>
                                                    <svg className="down_icon"  focusable="false" viewBox="0 0 32 32">

                                                            <path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1s1.5-0.7,2.1-0.2l10,8.2l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z">
                                                        </path></svg>
                                                        </span>
                                                        <span id="modal_dropdown">
                                                            <div className="project_modal_button" onClick={() => this.props.openModal('edit_project')}>Edit Project</div>
                                                           <div className="project_modal_button" onClick={() => this.props.openModal('delete_project')}>Delete Project</div>  
                                                        </span>
                                                </button>
                                            </span>
                                            <div className="project_nav_links">
                                                <Link to={`/tasklist/project/${this.props.match.params.projectId}`} className="top_link">List</Link>
                                                <Link to={`/taskcal/project/${this.props.match.params.projectId}`} className="top_link">Calendar</Link>   
                                            </div>                   
                                    </span> 
                            </span>
                            <span>
                            </span> 
                        </span>
                        : null
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
