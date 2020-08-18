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


        <body className='splash content'>
            
        </body>
    </div>
)


export default SplashPage;