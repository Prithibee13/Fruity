import React from 'react';
import FruitDetailes from '../../Products/FruitsDetails/FruitDetailes/FruitDetailes';
import AddProduct from '../AddProducts/AddProduct';
import AddQuantity from '../AddQuantity/AddQuantity';
import Banner from '../Banner/Banner';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const Management = () => {
    return (
        <div>
           <Banner></Banner> 
           <FruitDetailes></FruitDetailes>
           <AddProduct></AddProduct>

           <AddQuantity></AddQuantity>

           <DeleteProduct></DeleteProduct>
           

        </div>
    );
};

export default Management;