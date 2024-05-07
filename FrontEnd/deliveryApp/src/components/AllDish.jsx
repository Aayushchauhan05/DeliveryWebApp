import React from 'react'
import { Dish } from './Dish';
import { useState } from 'react';

export const AllDish = () => {

    const baseUrl = "http://localhost:8181";
    const [dishes , setDishes] = useState([
        {"id":7,"dishName":"Panner Butter Masala","price":300,"cuisine":"Indian","veg":true},
        {"id":8,"dishName":"Chicken Butter Masala","price":350,"cuisine":"Indian","veg":false},
        {"id":9,"dishName":"Pizza","price":269,"cuisine":"italian","veg":true},
    ]);


    return (
        <div>
            {
            dishes.length>0? dishes.map((item) => <Dish key ={item.id} dish={item}/>):"No Dish"
        }    
        </div>
    )
}
