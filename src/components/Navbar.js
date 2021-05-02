import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link  href="#home" onClick={() => updateExpanded(false)}>
                <i className="fas fa-home"></i> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#about"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-user"></i> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#resume"
                onClick={() => updateExpanded(false)}
              >
                <i className="fas fa-code"></i> Experience
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#awards"
                onClick={() => updateExpanded(false)}
              >
                <i className="fas fa-trophy"></i> Achievements
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#education"
                onClick={() => updateExpanded(false)}
              >
                <i className="fas fa-user-graduate"></i> Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#skills"
                onClick={() => updateExpanded(false)}
              >
                <i className="fas fa-badge"></i> Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#portfolio"
                onClick={() => updateExpanded(false)}
              >
                <i className="fab fa-codepen"></i> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://drive.google.com/file/d/1mGTxAJIhVWA1cB-GZrvYllWchYELLjzN/view?usp=sharing"
                target="_blank" onClick={() => updateExpanded(false)}
              >
                <i className="far fa-file-alt"></i> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
