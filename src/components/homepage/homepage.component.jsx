import React from 'react';
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
        <div>
            <p>Are you ready to start?</p>
            <Link className='option 'to='/quiz'>
                Yes
            </Link>
        </div>
    )
}

export default Homepage;