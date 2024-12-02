import React from "react";
import './techstack.css';
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiFirebase
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import {FaFigma , FaGithub ,FaAws,FaDocker  } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub  />
        <p>Github </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma  />
        <p>Figma </p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p>Slack</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
        <p>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaAws />
        <p>AWS</p>
      </Col>
      
    </Row>
  );
}

export default Toolstack;
