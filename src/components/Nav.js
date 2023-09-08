import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header>
        <NavLink className="to_home" to="/">
          Victor
        </NavLink>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="experience">Experience</NavLink>
            </li>
          </ul>
        </nav>
        <button
          className={`hamburger ${isActive ? "is-active" : ""}`}
          onClick={handleClick}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </header>
      <nav className={`ham-nav ${isActive ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="experience">Experience</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
