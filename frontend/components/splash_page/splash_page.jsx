import React from 'react';
import { Link } from 'react-router-dom';

const SplashPage = () => (
    <div>
        <header className="splash content">
            <p>Situo</p>
                <a href='mailto:aapodaca@gmail.com'>Contact</a>
            {/* add email icon */}
            <br/>
                <Link to='/login'>Log In</Link>
            <br/>
                <Link to='/signup'>Try for Free</Link>
        </header>


        <div className='splash content'>
            
        </div>
    </div>
)


export default SplashPage;