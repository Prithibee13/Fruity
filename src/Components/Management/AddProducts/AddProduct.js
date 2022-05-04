import React from 'react';
import { Form } from 'react-bootstrap';

const AddProduct = () => {
    return (
        <div className='mar-20'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 ">
                    <div className="col mx-auto">
                        <div className="card border-0 p-5  shadow-lg rounded">
                            <h2 className="card-title text-center">Add New Item Here</h2>
                            <div className="card-body text-center mt-5">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formProductName">
                                        <Form.Control type="text" placeholder="Enter product Name" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="text" placeholder="Enter image url" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="text" placeholder="Enter product description" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="text" placeholder="Enter product quantity" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="text" placeholder="Enter product price" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="text" placeholder="Enter sale" required />
                                    </Form.Group>
                                    <button type="submit">
                                        Submit
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;