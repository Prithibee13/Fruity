import React from 'react';
import { Button } from 'react-bootstrap';
import ProducttTable from './ProducttTable';

const Product = (props) => 
{
    const {item} = props;
    const { img } = item;
    return (
        <article>
            <div className="col">
                <div className="card h-100 border-0 p-5 shadow-lg rounded">
                    <div className='round-img mx-auto'>
                        <img src={img} className="card-img-top w-100" alt="..." />
                    </div>
                    <div className="card-body text-center mx-auto mt-5">
                        <ProducttTable item = {item}></ProducttTable>
                        <button className='inv-btn rounded mt-5'>Update Stock</button>



                        <Button variant='danger' className='d-block mt-5 mx-auto'>Delete Item</Button>


                    </div>
                </div>
            </div>
        </article>
    );
};

export default Product;