import React from 'react';
import FruitDetailes from '../../Products/FruitsDetails/FruitDetailes/FruitDetailes';
import AddProduct from '../AddProducts/AddProduct';
import AddQuantity from '../AddQuantity/AddQuantity';
import AdminBanner from '../AdminBanner/AdminBanner';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const Management = () => {
    return (
        <div>
           <AdminBanner></AdminBanner>

           <h2>Hello management</h2>
           <FruitDetailes></FruitDetailes>
           <AddProduct></AddProduct>

           <AddQuantity></AddQuantity>

           <DeleteProduct></DeleteProduct>
           

        </div>
    );
};

export default Management;