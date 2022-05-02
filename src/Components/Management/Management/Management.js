import React from 'react';
import AddProduct from '../AddProducts/AddProduct';
import AdminBanner from '../AdminBanner/AdminBanner';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import WareHouse from '../WareHouse/WareHouse';

const Management = () => 
{
    return (
        <div>
           <AdminBanner></AdminBanner>

           <WareHouse></WareHouse>

           <AddProduct></AddProduct>


           <DeleteProduct></DeleteProduct>
           

        </div>
    );
};

export default Management;