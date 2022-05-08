import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import ProducttTable from './ProducttTable';

const Product = (props) => {

    const { item } = props;

    const handleDelete = (id) => {
        const deleteId = {
            id: id
        };

        fetch('https://fruit-server-ph.herokuapp.com/deleteitem', {
            method: 'POST',
            headers:
            {
                'content-type': 'application/json'
            },
            body: JSON.stringify(deleteId)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <article>
            <div className="col">
                <div className="card h-100 border-0 p-5 shadow-lg rounded">
                    <div className="card-body  mt-5">
                        <ProducttTable item={item}></ProducttTable>
                        <div className="buttons text-center">
                            <button className='inv-btn  rounded mt-5'>Update Stock</button>

                            <Button variant='danger' className='d-block delete-btn mt-5 mx-auto' onClick={() => handleDelete(item._id)}>Delete Item</Button>

                        </div>


                    </div>
                </div>
            </div>
        </article>
    );
};

export default Product;