import { useEffect, useState } from 'react';

const GetFruits = (page , size) => 
{
    const [fruits , setFruits] = useState([])

    useEffect(()=>
    {
        fetch(`https://fruit-server-ph.herokuapp.com/items?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setFruits(data));
    } , [page , size])

    return [fruits , setFruits]
};

export default GetFruits;