import { useState } from "react";
import GetFruits from "./GetFruits";

const UseFilter = (id) => 
{
    const [product , setProduct] = useState([]);


    const [fruits , setFuits] = GetFruits();

    const newFruiut = fruits.filter(fruit => fruit._id === id)

    setProduct(newFruiut);


    return [product , setProduct];
};

export default UseFilter;