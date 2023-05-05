import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    console.log('NotFound');
    return (
        <div  >
            <h1 class="zoom-area" >404 Error </h1>
            <h1 class="zoom-area">Not Found </h1>
            <section class="error-container">
                <span>4</span>
                <span><span class="screen-reader-text">0</span></span>
                <span>4</span>
            </section>
            <div class="link-container">
                <Link className='more-link'  to='/'>Go to  Home</Link>

            </div>
        </div>
    );
}

export default NotFound;
