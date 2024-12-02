import React from "react";
import "./techstack.css";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiFlask

} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaVuejs,FaHtml5,FaCss3Alt  } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5  />
        <p>Html 5 </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
        <p>CSS 3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p>Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs />
        <p>Vue.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
        <p>Flask</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiDjango />
        <p>Django</p>
      </Col>
     
     
    </Row>
  );
}

export default Techstack;