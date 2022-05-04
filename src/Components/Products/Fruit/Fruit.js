import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./Fruit.css"
const Fruit = (props) => {

    const { fruit } = props;
    const { _id, name, img , description , Quantity , supplier_name , price } = fruit;

    const navigate = useNavigate();

    const [user] = useAuthState(auth)

    const toManagement = (id) =>
    {
        user ? navigate(`inventory/${id}`) : navigate('/login'); 
        
    }
    return (
        <article>
            <div data-aos="fade-up" className="col border-0 border-end-2">
                <div className="card h-100 border-0 p-3 ">
                    <div className='round-img mx-auto'>
                        <img src={img} className="card-img-top w-100" alt="..." />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <p>Price : {price}</p>
                        <p>In stock : {Quantity}</p>
                        <p>Supplier : {supplier_name}</p>
                        <button className='inv-btn rounded' onClick={()=>toManagement(_id)}>Update Stock</button>

                    </div>
                </div>
            </div>

        </article>
    );
};

export default Fruit;