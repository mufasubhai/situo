import React from 'react';
import { Link } from 'react-router-dom';



const SplashPage = () => (
    <div className='splash-body'>
        <header className="splash-header">
            <Link to='/'><img src={window.logoBlack} className='splash-logo' /></Link>

                <span className='splash-links'>
                <a href='mailto:aapodaca@gmail.com'><img className="email-button" src={window.mailgrey}/></a>
                <Link to='/login' className='splash-link'>Log In</Link>
                <Link to='/signup' className='splash-button'>Try for Free</Link>                    
                </span> 


        </header>

        <span className='splash-container'>
            <div className='splash-content'>
                <div className="splash-top">
                    <h3 className='title-header'>Keep Your Team coordinated, wherever you are</h3>
                    <p className='title-text'>With Situo, remote teams can organize projects, manage shifting priorities, and get work done.</p>
                    <Link to='/signup' className='splash-link-large'>Try for free</Link>                    

                    <p className="trusted">TRUSTED BY THE WORLD'S BEST TEAMS</p>

                </div>
                    <span className="image-container">

                            <p className='splash-logos'>
                                <img src={window.appacademy} className='splash-company-logo'  />
                                <img src={window.tiktok} className='splash-company-logo' />
                                <img src={window.spacex} className='splash-company-logo'  />
                                <img src={window.theonion} className='splash-company-logo'  />
                                <img src={window.reddit} className='splash-company-logo'  />
                                <img src={window.wfmu} className='splash-company-logo'  />
                                <img src={window.npr} className='splash-company-logo'  />
                            </p>
                        <video className="splash-vid" src={window.splashVid} autoPlay loop muted></video>
                    </span>
                <div className='splash-bottom'>
                        <h2 className='header-bottom'>Get organized
                        <p className='text-bottom'>Plan and structure work in a way that’s best for you. Set priorities and deadlines. Share details and assign tasks. All in one place.</p>
                        </h2>
                        <h2 className='header-bottom'>Stay on track
                        <p className='text-bottom'>Follow projects and tasks through every stage. You know where work stands and can keep everyone aligned on goals.</p>
                        </h2>
                    <   h2 className='header-bottom'>Hit deadlines
                        <p className='text-bottom'>Create visual project plans to see how every step maps out over time. Pinpoint risks. Eliminate roadblocks. Even when plans change.</p>
                        </h2>
                </div>
            </div>
        </span>
    </div>
    )


export default SplashPage;


