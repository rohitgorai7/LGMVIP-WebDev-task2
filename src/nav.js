import React from "react";
import './nav.css';
import logo from './lgm-logo.png';
const Nav= () => {    
    
    return(        
        <div className="nav">
            <img className="navtitle" onClick={()=> window.scroll(0,0)} src={logo} alt="logo" />          
        </div>
    )
}
export default Nav;