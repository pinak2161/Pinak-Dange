import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pinak Dada Rao Dange </span>
            from <span className="purple"> Pune, Maharashtra, India.</span>
            <br />
            
            <div> I am currently pursuing my Bachelor's in Computer Science & Engineering at
            Savitribai Phule Pune University.
            </div>
           

            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pinak Dange</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
