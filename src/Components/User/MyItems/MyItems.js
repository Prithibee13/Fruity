import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import GetFruits from '../../../Hooks/GetFruits';
import Loading from '../../Loading/Loading';
import Fruit from "../../Products/Fruit/Fruit"
import UserProduct from '../UserProduct/UserProduct';
const MyItems = () => {
    const [currentUser, error, loading] = useAuthState(auth);





    const [items, setItems] = GetFruits();


    const userItems = items.filter(item => item.user_Email === currentUser.email);


    let message;
    let success;

    if (loading) {
        message = <Loading></Loading>
    }

    if (currentUser) {
        success = <p> User Name : {currentUser.displayName}</p>
    }


    return (
        <div className='mar-20' data-aos="fade-up">
            <div>
                <div className="container">

                    <div className='text-end '>
                        {success}
                        <p>User Email : {currentUser.email}</p>
                    </div>
                    {message}


                    <h2 className='text-center my-5'>My Items</h2>

                    <div className="row row-cols-1 row-cols-md-2 g-5">
                        {
                            userItems.map(item => <UserProduct key={item._id} fruit={item}></UserProduct>)
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MyItems;