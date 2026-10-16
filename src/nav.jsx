import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const data = [
    {
      item: "Home",
      url: "/",
    },
    {
      item: "Todo List",
      url: "/about",
    },
    {
      item: "Recipes",
      url: "/products",
    },
    {
      item: "Weather",
      url: "/contact",
    },
    {
      item: "News",
      url: "/Recipes",
    },
    {
      item: "Movie",
      url: "/Move",
    },
    {
      item: "Food",
      url: "/food",
    },
    
    {
      item: "Employees",
      url: "/EMp",
    },
  ]

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="nav-logo">
          API
        </Link>

        {/* Desktop / Mobile Menu */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {data.map((a, index) => (
            <Link
              to={a.url}
              key={index}
              className="nav-link"
              onClick={handleLinkClick}
            >
              {a.item}
            </Link>
          ))}

          <Link
            to="/contact"
            className="nav-btn"
            onClick={handleLinkClick}
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </nav>
  );
};

export default Nav;


// import React from "react";
// import { Link } from "react-router-dom";

// const Nav=()=>{

//     const data = [
//         {
//             item:"Home",
//             url:"/"
//         },
//         {
//             item:"About",
//             url:"/about"
//         },
//         {
//             item:"Products",
//             url:"/products"
//         },
//         {
//             item:"Contact",
//             url:"/contact"
//         },
//     ]
//     return (
//         <>
        

//         {
//             data.map((a,index)=>{
//                 return(
//                     <>
//                         <Link to={a.url}>{a.item}</Link>
//                     </>
//                 )
//             })
//         }
        
//         </>
//     )
// }

// export default Nav