import React from "react";
import "./Header.css";
const headerJson = require('../../Jsons/menu.json');

function Header() {
  return (
    <>
      <div className="inlineHeader addBoxshadow">
        <div className="leftLogo">
          <a href="/">
            <img
              src={require("../../assets/logo.jpeg")}
              className="header_logo_img"
              alt="logo"
            />
            {/* <img src="https://www.samatapat.com/admin/uploads/setting/samapat-name6544c0aa348d2.png" className="logoText" alt="name"/> */}
            <span className="header_logo_name">
              <img
              src={require("../../assets/name.jpeg")}
              className="header_logo_img"
              alt="logo"
            /></span>
          </a>
        </div>
        <div className="rightNavBar" style={{margin:'20px',fontFamily:'Reem Kufi Ink,sans-serif'}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{display: 'flex',flexDirection: 'row',alignItems: 'center',gap:'15px',fontFamily:'cursive'}}>
           { 
             
              headerJson.menu.map((element)=>{
                return(
                  <li className="nav-item dropdown header-tab-name" key={element.menu}>
                      <a className={element.submenu.length>0?'nav-link dropdown-toggle':'nav-link'}   href="/"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {element.menu}
                      </a>
                      {
                        element.submenu.length>0 && 
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{boxShadow:'inset 1px 2px 14px 8px #507d0d47',backgroundColor:'#fefff5'}} key={element.menu+'1'}>
                            {
                              element.submenu.map(submenu => {
                                return(
                                <li key={submenu.name} style={{boxShadow: '1px 2px 13px 1px #507d0d30',padding:'7px'}}><a className="dropdown-item" href={submenu.url}>{submenu.name}</a></li>
                                
                                )
                              })
                            }
                      
                        </ul>
                      }
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
