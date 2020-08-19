import React from 'react';
import { Link } from 'react-router-dom';



const SplashPage = () => (
    <div className='splash-body'>
        <header className="splash-header">
            
                <img src={window.logoBlack} className='splash-logo'/>

                <span className='splash-links'>
                    <a className='splash-link' href='mailto:aapodaca@gmail.com'>Contact</a>
                <Link to='/login' className='splash-link'>Log In</Link>
                <Link to='/signup' className='splash-link'>Try for Free</Link>                    
                </span> 


        </header>

        <span>
            <div className='splash-content'>
                <div className="splash-text">
                </div>





                <video class="videoAnimation js-logo-farm-image"
                    poster="https://luna1.co/2b4335.png"
                    data-src="https://d1gwm4cf8hecp4.cloudfront.net/videos/homepage/list-grid/home-list-EN.mp4"
                    muted="" playsinline="" autoplay="" loop="" src="https://d1gwm4cf8hecp4.cloudfront.net/videos/homepage/list-grid/home-list-EN.mp4">

                </video>
            
            </div>
        </span>
    </div>
    )


export default SplashPage;

