import React from "react";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Import your JSON data
import headerJson from '../../Jsons/menu.json';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary addBoxshadow inlineHeader">
      <Container>
        <Navbar.Brand href="#home">Rushikul</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {headerJson.map((element, index) => (
              <React.Fragment key={index}>
                {element.submenu?.length === 0 ? (
                  <Nav.Link href={element.menuUrl}>{element.menu}</Nav.Link>
                ) : (
                  <NavDropdown title={element.menu} id={`collapsible-nav-dropdown-${index}`}>
                    {element.submenu.map((submenu, subIndex) => (
                      <NavDropdown.Item key={subIndex} href={submenu.url}>{submenu.name}</NavDropdown.Item>
                    ))}
                  </NavDropdown>
                )}
              </React.Fragment>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;