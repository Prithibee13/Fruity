import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./Fruit.css"
const Fruit = (props) => {

    const { fruit } = props;
    const { _id, Name, img } = fruit;

    const navigate = useNavigate();

    const [user] = useAuthState(auth)

    const toManagement = (id) =>
    {
        user ? navigate(`management/${id}`) : navigate('/login'); 
        
    }
    return (
        <article>
            <div className="col">
                <div className="card h-100 border-bottom-0 border-top-0 border-start-0 p-3 ">
                    <div className='round-img mx-auto'>
                        <img src={img} className="card-img-top w-100" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h2 className="card-title">{Name}</h2>

                        <button className='mng-btn rounded' onClick={()=>toManagement(_id)}>Manage Item</button>

                    </div>
                </div>
            </div>

        </article>
    );
};

export default Fruit;