import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import { Link } from "react-scroll";





const Navbar = () => {
    return (
       <nav className="navbar">
         <img src={logo} alt = "logo" className = "logo" />
         <div className="desktopmenu">
                   
         <Link className="desktopmenuitem" >Home</Link>
            <Link className="desktopmenuitem" >About</Link>
            <Link className="desktopmenuitem" >Projects</Link>
            <Link className="desktopmenuitem">Contact</Link>
                   
                   
                    </div>
         <button className="desktopmenuBtn">
         <img src={contact} alt = "desktopmenuimg" className="desktopmenuimg"/>  Contact Me

         </button>
       </nav>

    );
};

export default Navbar;