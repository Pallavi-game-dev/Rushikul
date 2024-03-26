import React from "react";
import "./Header.css"

function Header(){
    return(
    <>
    <nav className="navbar navbar-expand-lg headerBg">
        {/* <img className="headerImg"src={require('../../assets/haederBg.jpg')} alt="header"/> */}
        <div className="header_logo">
            <div><img className="header_logo_img"src={require('../../assets/logo.png')} alt="header"/></div>
            <div className="header_label">Rushikul</div>
        </div>
       
    </nav>

    </>
    )
}
export default Header;