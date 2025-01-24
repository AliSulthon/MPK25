import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://web.facebook.com/mpk.maskumambang/">
                <img src={navIcon2} alt="Facebook Icon" />
              </a>
              <a href="https://www.instagram.com/mpk.maskumambang2025/">
                <img src={navIcon3} alt="Instagram Icon" />
              </a>
            </div>
            <p>©Copyright 2025. Ali Sulthon</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
