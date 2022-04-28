import React from 'react';
import GetFruits from '../../../Hooks/GetFruits';
import Fruit from '../Fruit/Fruit';

const Fruits = () => {
    const [items, setItems] = GetFruits();
    console.log(items);
    return (
        <div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        items.map(item => <Fruit key={item._id} fruit={item}></Fruit>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Fruits;