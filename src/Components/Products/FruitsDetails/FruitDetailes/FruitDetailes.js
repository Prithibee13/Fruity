import React from 'react';
import { useParams } from 'react-router-dom';
import GetFruits from '../../../../Hooks/GetFruits';
import ProductDetailesTable from '../ProductDetailsTable/ProductDetailesTable';

const FruitDetailes = () => 
{
    
    const { id } = useParams();

    const [item , setItem] = GetFruits(); 
    const newItem = [...item];


    const fillteredArray = newItem.filter(product => product._id === id);



    return (
        <div>
            <ProductDetailesTable item = {fillteredArray[0]}></ProductDetailesTable>
        </div>
    );
};

export default FruitDetailes;