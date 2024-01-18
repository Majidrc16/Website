import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Jobs = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="jobspage">
      <div className="navbar">
        {/* "Logo" */}
        <div className="logo">ISTAIX</div>

        {/* Adding button for min resulotion */}
        <button className="showNavBtn" onClick={() => setShowNav(!showNav)}>
          {showNav ? "Hide" : "Show"}
        </button>

        {/* Navbar  */}

        <div className={`navitems ${showNav ? "navitems_show" : ""}`}>
          <div className="items">
            <Link to="/" className="links">
              Home
            </Link>
          </div>
          <div className="items">
            <Link to="/Jobs" className="links">
              Jobs
            </Link>
          </div>
          <div className="items">
            <Link to="/Pricing" className="links">
              Pricing
            </Link>
          </div>
          <div className="items">
            <Link to="/Products" className="links">
              Products
            </Link>
          </div>
          <div className="items">
            <Link to="/About" className="links">
              About
            </Link>
          </div>
        </div>

        {/* " Button" */}

        <div className="btn">
          <button>
            <p>Get Started</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
