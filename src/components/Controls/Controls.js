import React,{useState} from "react";
import './Controls.css';

export default function Controls(props){
    const { status,handleChangeInStatus,handleIsApplied }= props
    const [ statusChange,setStatus] = useState(status);
    function handleAllUnavailable(value){
        setStatus(value);
        handleChangeInStatus(value);
    }
    function handleAllAvailable(value){
        setStatus(value);
        handleChangeInStatus(value);
    }
    function handleApply(){
        handleIsApplied(true);
    }
    return(
        <div className="controls-outer-wrapper">
            <div className="controls-button-wrapper" onClick={e=>handleAllUnavailable('false')}>ALL UNAVAILABLE</div>
            <div className="controls-button-wrapper" onClick={e=>handleAllAvailable('true')}>ALL AVAILABLE</div>
            <div className="controls-button-wrapper" onClick={e=>handleApply()}>APPLY</div>
        </div>
    )
}