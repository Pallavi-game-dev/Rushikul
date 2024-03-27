import React from "react";
import "./Header.css";
const headerJson = require('../../menu.json');
function Header() {
  return (
    <>
      <div className="inlineHeader addBoxshadow">
        <div className="leftLogo">
          <a href="/">
            <img
              src={require("../../assets/logo.png")}
              className="header_logo_img"
              alt="logo"
            />
            {/* <img src="https://www.samatapat.com/admin/uploads/setting/samapat-name6544c0aa348d2.png" className="logoText" alt="name"/> */}
            <span className="header_logo_name">Rushikul</span>
          </a>
        </div>
        <div className="rightNavBar" style={{margin:'20px',fontFamily:'Reem Kufi Ink,sans-serif'}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{display: 'flex',flexDirection: 'row',alignItems: 'center',gap:'30px'}}>
           { 
             
              headerJson.map((element)=>{
                return(
                  <li className="nav-item dropdown" key={element.menu}>
                      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {element.menu}
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{fontSize:'14px',borderBottom:'1px solid #80808038'}}>
                      {
                       
                        element.submenu.map(submenu => {
                          return(
                           <li key={submenu} style={{borderBottom:'1px solid #80808026',margin:'7px 5px'}}><a className="dropdown-item" href="/">{submenu}</a></li>
                           
                          )
                        })
                      }
                        </ul>
                  </li>
                )
              })
            
           }
            
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
