import React, { useState } from "react";

function Navbar({ changeAlignment }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeAlignmentHandler = (alignment) => {
    changeAlignment(alignment);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src="https://cdn3.iconfinder.com/data/icons/nature-37/120/aeaaqqdqas-128.png"
          alt="Logo"
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => window.location.reload()}
        />
        <h1>City Widget</h1>
      </div>
      <div className="dropdown">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            <button onClick={() => changeAlignmentHandler("top")}>Top</button>
            <button onClick={() => changeAlignmentHandler("left")}>Left</button>
            <button onClick={() => changeAlignmentHandler("right")}>
              Right
            </button>
            <button onClick={() => changeAlignmentHandler("bottom")}>
              Bottom
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
