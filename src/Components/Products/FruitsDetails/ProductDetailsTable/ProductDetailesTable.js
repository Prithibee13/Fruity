import React from 'react';
import { Table } from 'react-bootstrap';

const ProductDetailesTable = () => {
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
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Name</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Price</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Quantity</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Supplier Name</td>
                                        <td></td>
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