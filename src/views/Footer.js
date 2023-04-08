import { Container, Col } from "react-bootstrap";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        
          <Col className="text-center">
            <div className="social-icon">
              <a href="#fsf"><img src={navIcon1} alt="Icon" /></a>
              <a href="#dss"><img src={navIcon2} alt="Icon" /></a>
              <a href="#sds"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
            <p>This is the final thesis of Quyen, Khoi and Na</p>
          </Col>
        
      </Container>
    </div>
  )
}