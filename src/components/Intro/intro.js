import React from "react";
import "./intro.css";
import bg from "../../assets/bg.jpg"; // Ensure this path is correct
import hireme from "../../assets/hireme.png"; // Import the button image
import { Link } from "react-scroll";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, My name is</span>
                <span className="name">Pinak Dange</span>
                <span className="title">I'm a Frontend developer</span>

                <p className="description">
                    I'm a Frontend developer with a passion for creating <br></br>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link>
                    <button className="btn">
                        <img src={hireme} alt="btnImg" className="btnImg" />
                        Hire Me
                    </button>
                </Link>
            </div>
            <img src={bg} alt="profile" className="bg" />  
        </section>
    );
};

export default Intro;
