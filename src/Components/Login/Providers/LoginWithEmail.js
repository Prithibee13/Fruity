import React from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginWithEmail = (props) => 
{
    const { emailLogin } = props
    return (
        <div>
            <section className='text-center'>

                <h2>Please Log in here first!</h2>

                <h3>Please Enter you email and password here</h3>

                <Form onSubmit={emailLogin}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                        <Form.Control className='w-50 mx-auto' type="email" name='email' placeholder="Enter your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPasswor">
                        <Form.Control type="password" className='w-50 mx-auto' name='password'  placeholder="Enter your Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>

        </div>
    );
};

export default LoginWithEmail;