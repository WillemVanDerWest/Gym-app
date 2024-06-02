import React from "react";
import '../index.css'
import img from "../kettlebel.png"

export default function Footer(){
    
    return(
        <footer className="footer-container">
            <div className="footer--div"><img src={img} width="30px"/><h3 className ="h3-text">Gym Logger</h3></div>
            <div>
                <div>
                    <ul className="ul-container">
                        <li><img src=""/>twit</li>
                        <li>/</li>
                        <li><img src=""/>ins</li>
                        <li>/</li>
                        <li><img src=""/>face</li>
                    </ul>
                </div>
                <div>
                    <ul className="ul2-container">
                        <li>Home</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}