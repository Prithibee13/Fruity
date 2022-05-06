import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.module.css"
import { faGooglePlusSquare, faFacebookSquare, faGitSquare, faApple } from "@fortawesome/free-brands-svg-icons"

const NotFound = () => {
    return (
        <div className='mar-20'>
            <div className="text-center">
                <div className="container not-found">

                    <h2 className='display-1'>4 0 4</h2>
                    <h3 className='display-4'>OOPS! PAGE NOT FOUND</h3>
                    <p className="">The page is you looking for may be not included or removed from  our project. Please Go back to homepage to restart a new experience. <Link className='text-decoration-none' to="/">Return to homepage</Link></p>
                    <div className="d-flex align-items-center justify-content-evenly flex-wrap my-5">
                        <FontAwesomeIcon icon={faGooglePlusSquare} size="2x" color='#FF7F3F'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faFacebookSquare} size = "2x" color='#FF7F3F'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faGitSquare} size = "2x" color='#FF7F3F'></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faApple} size = "2x" color='#FF7F3F'></FontAwesomeIcon>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NotFound;