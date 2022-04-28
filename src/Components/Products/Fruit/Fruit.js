import React from 'react';
import "./Fruit.css"
const Fruit = (props) => {

    const { fruit } = props;
    const { Name, img } = fruit;
    return (
        <article>
            <div className="col">
                <div className="card h-100 border-bottom-0 border-top-0 border-start-0 p-3 ">
                    <div className='round-img mx-auto'>
                        <img src={img} className="card-img-top  w-100" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h2 className="card-title">{Name}</h2>

                        <button>Manage Item</button>

                    </div>
                </div>
            </div>

        </article>
    );
};

export default Fruit;