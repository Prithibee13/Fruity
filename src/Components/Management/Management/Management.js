import React from 'react';
import { useParams } from 'react-router-dom';
import AddProduct from '../AddProducts/AddProduct';
import AddQuantity from '../AddQuantity/AddQuantity';
import AdminBanner from '../AdminBanner/AdminBanner';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const Management = () => 
{
    return (
        <div>
           <AdminBanner></AdminBanner>

           <AddProduct></AddProduct>


           <DeleteProduct></DeleteProduct>
           

        </div>
    );
};

export default Management;