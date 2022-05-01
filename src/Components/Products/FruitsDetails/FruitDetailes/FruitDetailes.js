import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailesTable from '../ProductDetailsTable/ProductDetailesTable';

const FruitDetailes = () => 
{
    
    const { id } = useParams();

    const [item , setitem] = useState({})

    useEffect(()=>
    {
        const url = `http://localhost:8000/item/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setitem(data))
    } , [])

    return (
        <div className='mar-20'>
            <ProductDetailesTable item={item}></ProductDetailesTable>
        </div>
    );
};

export default FruitDetailes;