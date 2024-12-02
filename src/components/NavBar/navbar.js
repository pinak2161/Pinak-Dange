import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopmenu">
        <Link className="desktopmenuitem" to="/">Home</Link>
        <Link className="desktopmenuitem" to="/about">About</Link>
        <Link className="desktopmenuitem" to="/projects">Projects</Link>
        <Link className="desktopmenuitem" to="/resume">Resume</Link>
        <Link className="desktopmenuitem" to="/contact">Contact</Link>
      </div>

      <button className="desktopmenuBtn">
        <img src={contact} alt="desktopmenuimg" className="desktopmenuimg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
