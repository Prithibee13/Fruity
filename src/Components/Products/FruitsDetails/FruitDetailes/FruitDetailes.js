import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddQuantity from '../AddQuantity/AddQuantity';
import ProductDetailesTable from '../ProductDetailsTable/ProductDetailesTable';
import "./FoodDetailes.css"


const FruitDetailes = () => {

    const { id } = useParams();

    const [item, setItem] = useState({})

    
    const domain = process.env.REACT_APP_SERVER_DOMAIN; 

    useEffect(() => {
        const url = `https://${domain}/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])



    const handleDelivered = () => {
        let newItem = { ...item };
        newItem.Quantity -= 1
        newItem.sale += 1
        

        handleItemDelivered(newItem)
        setItem(newItem);
    }

    const handleRestock = (event) => 
    {
        event.preventDefault();

        const amount = event.target.amount.value;
        let newItem = { ...item };
        const newQuantity = parseInt(amount);
        newItem.Quantity += newQuantity;

        handleItemRestock(newItem)
        
        setItem(newItem)   

    }

    async function handleItemRestock(item)
    {
        const url = `https://${domain}/restock/${id}`;
        fetch(url , {
            method : "PUT",
            headers:
            {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data =>
            {
                console.log(data);
            })
    }

    const handleItemDelivered = (item) =>
    {
        const url = `https://${domain}/delivered/${id}`;
        fetch(url , {
            method : "PUT",
            headers:
            {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(item)
        })
        .then(res => res.json())
        .then(data =>
            {
                console.log(data);
            })
    }
    

    return (
        <div className='mar-20'>
            <ProductDetailesTable item={item}></ProductDetailesTable>
            <div className="text-center">
                <button className='deliver-btn' onClick={handleDelivered}>Delivered</button>
            </div>
            <AddQuantity reStock ={handleRestock}></AddQuantity>

            <div data-aos="fade-up" className="text-center">
                    <Link to="/manageInventories"><button className=' mng-btn rounded'>Manage Your Invenories</button></Link>
                </div>

            
        </div>
    );
};

export default FruitDetailes;