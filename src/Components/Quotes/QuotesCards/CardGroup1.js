import React from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardGroup1 = () => {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-5">
                <div className="col">
                    <div className="card h-100 border-0 p-5 rounded shadow-lg">
                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        <div className="card-body">
                            <h3 className="card-title text-center">Carol Denvers</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0 p-5 rounded shadow-lg">

                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        <div className="card-body">
                            <h3 className="card-title text-center">Rambo</h3>
                            <p className="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0 p-3 rounded shadow-lg">

                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        <div className="card-body">
                            <h3 className="card-title text-center">Samuel</h3>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardGroup1;