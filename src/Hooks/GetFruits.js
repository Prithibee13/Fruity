import { useEffect, useState } from 'react';

const GetFruits = () => 
{
    const [fruits , setFruits] = useState([])

    useEffect(()=>
    {
        fetch('http://localhost:8000/items')
        .then(res => res.json())
        .then(data => setFruits(data));
    } , [])
    return [fruits , setFruits]
};

export default GetFruits;