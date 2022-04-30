import React from 'react';
import GetFruits from '../../../Hooks/GetFruits';
import Fruit from '../Fruit/Fruit';
import "./Fruits.css";

const Fruits = () => {
    const [items, setItems] = GetFruits();
    console.log(items);
    return (
        <div className='mar-20'>

            <div className="container">
                <h2 className='text-center py-4 my-4'>Our Inventory</h2>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        items.map(item => <Fruit key={item._id} fruit={item}></Fruit>)
                    }
                </div>
                <div className="text-center">
                    <button className=' mng-btn rounded'>Manage Your Invenory</button>
                </div>

            </div>


        </div>
    );
};

export default Fruits;