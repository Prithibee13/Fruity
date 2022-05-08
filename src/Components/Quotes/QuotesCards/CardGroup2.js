import React from 'react';

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardGroup2 = () => {
    return (
        <div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    <div className="col">
                        <div className="card h-100 p-5 rounded shadow-lg border-0">

                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                            <div className="card-body">
                                <h3 className="card-title">Francis</h3>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 p-5 rounded border-0 shadow-lg">

                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>

                            <div className="card-body">
                                <h3 className="card-title">Summer</h3>
                                <p className="card-text">This is a short card.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 p-5 rounded border-0 shadow-lg">

                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                            <div className="card-body">
                                <h3 className="card-title text-center">Alex</h3>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CardGroup2;