import React from 'react';

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.revealNav = this.revealNav.bind(this);
    }

    revealNav() {
        const nav = document.getElementById('situo_sidebar');
        const burger = document.getElementById('burger_logo_2');
        const burgerbutton = document.getElementById('hidden_burger');
        nav.style.marginLeft = '0px';
        burger.style.display = "none"
        burgerbutton.style.display = "none"
    }

    render() {
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
                    <h1 className="label">Home</h1>
                </span>

                <span className="right_top_nav">
                    <div className="avatar">

                    </div>
                    <div> Contact:
                        <svg  className="Icon AbstractThemeableRectangularButton-leftIcon BriefcaseIcon" focusable="false" viewBox="0 0 32 32"><path d="M8,26 L8,10 L10,10 L10,26 L22,26 L22,10 L24,10 L24,26 L26,26 C27.1045695,26 28,25.1045695 28,24 L28,12 C28,10.8954305 27.1045695,10 26,10 L22,10 L10,10 L6,10 C4.8954305,10 4,10.8954305 4,12 L4,24 C4,25.1045695 4.8954305,26 6,26 L8,26 Z M10,8 L10,6 C10,3.790861 11.790861,2 14,2 L18,2 C20.209139,2 22,3.790861 22,6 L22,8 L26,8 C28.209139,8 30,9.790861 30,12 L30,24 C30,26.209139 28.209139,28 26,28 L6,28 C3.790861,28 2,26.209139 2,24 L2,12 C2,9.790861 3.790861,8 6,8 L10,8 Z M12,8 L20,8 L20,6 C20,4.8954305 19.1045695,4 18,4 L14,4 C12.8954305,4 12,4.8954305 12,6 L12,8 Z"></path></svg>

                    </div>
                    <ul className="top_nav_dropdown">
                        <button onClick={this.props.logout}>Logout</button>
                    </ul>
                </span>

            </div>
        )
            
    }
}

export default TopNav;
