import React, {useState} from "react";
import './SearchBar.css';

export default function SearchBar(props){
    const {keyword,handleChangeInKeyword} = props;
    const [searchTerm,setTerm] = useState(keyword);
    return(
        <div className="searchbar-outer-wrapper">
            <div className="search-input-space"> </div>

                <input type="text" placeholder="Search..." className="search-input-bar" value={searchTerm} onChange={e=>{if(e.target){setTerm(e.target.value);handleChangeInKeyword(e.target.value)}}}></input>

            <div className="search-input-space" style={{width:"35%"}}></div>
        </div>
    )
}