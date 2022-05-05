import React from "react";
import './FoodDetails.css';

export default function Food(props){
    const {foodItems,keyword,status,isApplied} = props;
    console.log(isApplied);
    if(isApplied && status.length>0){
        if(status === 'true'){
            foodItems.outofstock = false
        }
        else if(status === 'false'){
            foodItems.outofstock = true
        }
    }
    return(
        <div className="food-items-outer-wrapper">
            <div className="food-items-inner-wrapper">
            {foodItems.map((item)=>{
                //console.log(item.outofstock)
                if(keyword.length>0){
                    if(item.foodname.startsWith(keyword)){
                        return <div key={item.foodid} className="food-list-item-wrapper" style={{background:item.outofstock ?"#890000":"#00a700"}}>{item.foodname}</div>
                    } 
                }
                else{
                    return <div key={item.foodid} className="food-list-item-wrapper" style={{background:item.outofstock ?"#890000":"#00a700"}}>{item.foodname}</div>
                }
                
            })}
            </div>
        </div>
    )
}