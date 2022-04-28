import React from 'react';
import GetFruits from '../../../Hooks/GetFruits';

const Fruits = () => 
{
    const [items , setItems] = GetFruits();
    return (
        <div>
            <h2>Total products : {items.length}</h2>
        </div>
    );
};

export default Fruits;