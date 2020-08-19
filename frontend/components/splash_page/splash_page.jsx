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

                    <img src={window.DS9} className='DS9' />

            </div>
        </span>
    </div>
    )


export default SplashPage;