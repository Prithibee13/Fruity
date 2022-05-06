import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./UserProduct.css"

const UserProduct = (props) => {
    const { fruit } = props;
    const { _id, name, img, description, Quantity, supplier, price } = fruit;

    const navigate = useNavigate();

    const [user] = useAuthState(auth)

    const toManagement = (id) => {
        user ? navigate(`/inventory/${id}`) : navigate('/login');

    }

    
    const handleDelete =(id)=>
    {
        const deleteId = {
            id : id
        };

        fetch('https://fruit-server-ph.herokuapp.com/deleteitem' ,{
            method : 'POST',
            headers:
            {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(deleteId)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <article>
                <div data-aos="fade-up" className="col">
                    <div className="card h-100 border-0 shadow-lg p-4 rounded">
                        <div className='round-img mx-auto'>
                            <img src={img} className="card-img-top w-100" alt="..." />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{description}</p>
                            <p>Price : {price}</p>
                            <p>In stock : {Quantity}</p>
                            <p>Supplier : {supplier}</p>
                            <div className="d-flex justify-content-evenly mt-5">

                                <button className='inv-btn rounded' onClick={() => toManagement(_id)}>Update Stock</button>

                                <Button variant='danger' className='delete-btn' onClick={() => handleDelete(fruit._id)} >Delete</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
        </div>
    );
};

export default UserProduct;