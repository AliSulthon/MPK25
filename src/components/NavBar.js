import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className="navbar-fixed">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/kampus" className={activeLink === 'kampus' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('kampus')}>Kampus</Nav.Link>
            <Nav.Link as={Link} to="/beasiswa" className={activeLink === 'beasiswa' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('beasiswa')}>Beasiswa</Nav.Link>
            <Nav.Link as={Link} to="/kontak" className={activeLink === 'kontak' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('kontak')}>Kontak Alumni</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://web.facebook.com/mpk.maskumambang/">
                <img src={navIcon2} alt="Facebook Icon" />
              </a>
              <a href="https://www.instagram.com/mpk.maskumambang2025/">
                <img src={navIcon3} alt="Instagram Icon" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
