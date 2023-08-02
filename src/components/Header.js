import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`header-class ${scrolled ? "scrolled" : ""}`}>
      <div className="header-text">
        <ul>
          <li onClick={() => handleLinkClick("home")}>Home</li>
          <li onClick={() => handleLinkClick("about")}>About</li>
          <li onClick={() => handleLinkClick("project")}>Project</li>
          <li onClick={() => handleLinkClick("contact")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
