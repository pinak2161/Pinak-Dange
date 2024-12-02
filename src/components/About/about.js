import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle.js";

import Techstack from "./Techstack";
import Aboutcard from "./aboutcard";
import about from "../../assets/about.png";
import Toolstack from "./Toolstack";
import "./about.css";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="about-row">
          <Col md={7} className="about-content">
            <h1 className="about-title">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="about-img">
            <img src={about} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
       
      </Container>
    </Container>
  );
}

export default About;
