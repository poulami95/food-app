import React, { useState } from "react";
import data from '../../menu.json';
import Food from "../FoodDetails";
import './RestaurantNav.css';


export default function Restaurantnav(props){
    const {keyword,status,isApplied} = props;
    const restaurantNames = data.menuDetails; //Object.keys(data.menuDetails).map((key)=>[key,data.menuDetails[key]]) //
    //console.log(Object.keys(data.menuDetails));
    const [selectedRestaurant, setRestaurant] = useState(Object.keys(restaurantNames)[0]);
    //const [showMenu,setShow] = useState(true);
    return(
        <div className="rs-name-outer-wrapper">
        <div className="rs-name-wrapper">
            {Object.keys(restaurantNames).map((item,index)=>{
                    return(<div key={`rs-id-${index}`} className={selectedRestaurant === item ?"rs-list-item rs-list-item-active":"rs-list-item"} onClick={e=>setRestaurant(item)}>{item}</div>)
                }) 
            }
        </div>
            <Food foodItems={restaurantNames[selectedRestaurant]} keyword={keyword} status={status} isApplied={isApplied}/>
        </div>
    )
}