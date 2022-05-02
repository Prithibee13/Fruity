import React from 'react';
import { Link } from 'react-router-dom';
import GetFruits from '../../../Hooks/GetFruits';
import Fruit from '../Fruit/Fruit';
import "./Inventories.css";

const Inventories = () => 
{

    const [items , setItems] = GetFruits()
    

    const newItems = [...items]

    const fruits = newItems.slice(0,6)

    return (
        <div className='mar-20'>

            <div className="container">
                <h2 className='text-center py-4 my-4'>Our Inventory</h2>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        fruits.map(item => <Fruit key={item._id} fruit={item}></Fruit>)
                    }
                </div>
                
                <div className="text-center">
                    <Link to="/manageInventories"><button className=' mng-btn rounded'>Manage Your Invenories</button></Link>
                </div>

            </div>


        </div>
    );
};

export default Inventories;