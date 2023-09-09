import { Link } from "gatsby";
import React, { useState } from "react";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="/">
        Brighton ALT NET
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        id="navbarCollapse"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/directory">
              Directory
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/meetings">
              Meetings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
