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
                                <h3 className="card-title text-center">Francis</h3>
                                <p className="card-text">There Fresh and healthy fruits is best seeling for us. Theire cold storage , logistic , delivery system is best in town.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 p-5 rounded border-0 shadow-lg">

                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>

                            <div className="card-body">
                                <h3 className="card-title text-center">Summer</h3>
                                <p className="card-text">There delivery system is best. Quick and safe delivery system give us a good vibe about them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 p-5 rounded border-0 shadow-lg">

                            <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon>
                            <div className="card-body">
                                <h3 className="card-title text-center">Alex</h3>
                                <p className="card-text">Our main supply come from them. Always they have a good quantity stock . theire price is much cheap than any other storage facility in town</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CardGroup2;