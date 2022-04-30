import React from 'react';
import { Table } from 'react-bootstrap';

const ProductDetailesTable = (props) => 
{
    const { item } = props;
    const { name ,price , Quantity , _id , supplier_name } = item ;  
    return (
        <div>
            <h2 className="text-center">Product Detailes</h2>
            <section>
                <div className="container">
                    <div className="row p-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <Table striped bordered hover className='p-5'>
                                <thead>
                                    <tr>
                                        <th>Sl no.</th>
                                        <th>Properties</th>
                                        <th>Value</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Id</td>
                                        <td>{_id}</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Name</td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Price</td>
                                        <td>{price}</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Quantity</td>
                                        <td>{Quantity}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Supplier Name</td>
                                        <td>{supplier_name}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
};

export default ProductDetailesTable;