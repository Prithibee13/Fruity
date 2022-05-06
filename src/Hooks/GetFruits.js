import { useEffect, useState } from 'react';

const GetFruits = (page , size) => 
{
    const [fruits , setFruits] = useState([])

    useEffect(()=>
    {
        const url = process.env.REACT_APP_SERVER_DOMAIN;
        fetch(`https://${url}/items?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setFruits(data));
    } , [page , size])

    return [fruits , setFruits]
};

export default GetFruits;