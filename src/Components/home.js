import React from "react";


export default function Home(props){
    return(
    <div className="btn-container">
    <button className="button-home" onClick={props.addDaily}>
        <img src={props.img} alt="Daily Logs button" width="26px"/>
        Add daily log
    </button>
    <button className="button-home" onClick ={props.goLog}>
        <img src={props.img} alt="View History button" width="26px" />
        View History
    </button>
</div>)
}