import React from 'react';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardGroup1 = () => {
    return (
        <div className='container' dat-aos = "fade-up">
            <div className="row row-cols-1 row-cols-md-3 g-5">
                <div className="col" >
                    <div className="card h-100 border-0 p-5 rounded shadow-lg">
                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        <div className="card-body">
                            <h3 className="card-title text-center">Carol Denvers</h3>
                            <p className="card-text">Very good transport and logistic service. They is our best stock providers. Their product one of the a best in town</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0 p-5 rounded shadow-lg">

                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        <div className="card-body">
                            <h3 className="card-title text-center">Rambo</h3>
                            <p className="card-text">Best , fresh product stock. Their cooling system is best and modern in town. Even fresh fruit found in off season.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border-0 p-5 rounded shadow-lg">

                        <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                        <div className="card-body">
                            <h3 className="card-title text-center">Samuel</h3>
                            <p className="card-text">Our dealers give us the best review for this werehouse. They are so pationate in there works. Our work is so good only for them. </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CardGroup1;