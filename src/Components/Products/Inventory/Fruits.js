import React, { useEffect, useState } from 'react';
import GetFruits from '../../../Hooks/GetFruits';
import Fruit from '../Fruit/Fruit';
import "./Fruits.css";

const Fruits = () => 
{

    const [pageCount , setPageCount] = useState(0);

    const [page , setPage] = useState(0);

    const [size , setSize] = useState(6);


    const [items, setItems] = GetFruits(page , size);

    useEffect(()=>
    {
        fetch("http://localhost:8000/itemsCount")
        .then(res => res.json())
        .then(data =>{
            const count = data.count;
            const pages = Math.ceil(count/6);

            setPageCount(pages);
        })
    } , [])
    console.log(items);
    return (
        <div className='mar-20'>

            <div className="container">
                <h2 className='text-center py-4 my-4'>Our Inventory</h2>
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    {
                        items.map(item => <Fruit key={item._id} fruit={item}></Fruit>)
                    }
                </div>
                <article aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <button className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        {
                            [...Array(pageCount).keys()].map(number => <li className={ page===number ? "page-item active" : "page-item"}><button className= "page-link" onClick={() =>setPage(number)}>{number + 1}</button></li>)
                        }
                        <li className="page-item">
                            <button className="page-link"  aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </article>
                <div className="text-center">
                    <button className=' mng-btn rounded'>Manage Your Invenory</button>
                </div>

            </div>


        </div>
    );
};

export default Fruits;