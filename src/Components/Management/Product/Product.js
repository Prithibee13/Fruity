import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import ProducttTable from './ProducttTable';

const Product = (props) => 
{
    const handleDelete =(id)=>
    {
        const deleteId = {
            id : id
        }
    }
    const {item} = props;
    return (
        <article>
            <div className="col">
                <div className="card h-100 border-0 p-2 shadow-lg rounded">
                    <div className="card-body text-center mx-auto mt-5">
                        <ProducttTable  item = {item}></ProducttTable>
                        <button className='inv-btn rounded mt-5'>Update Stock</button>

                        <Button variant='danger' className='d-block mt-5 mx-auto' onClick={() => handleDelete(item._id)}>Delete Item</Button>


                    </div>
                </div>
            </div>
        </article>
    );
};

export default Product;