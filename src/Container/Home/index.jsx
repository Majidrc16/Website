import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="homepage">
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

      {/* Section Containing data "Images" & "Text" */}

      <div className="FFF">
        <div className="TT">
          <p className="TTT">
            <h1>
              Diversified Services.
              <br />
              Unvarying Quality.
            </h1>
          </p>
          <br />
          <p className="RRR">
            We design 100+ commercial & residential projects
            <br />
            in UAS & across the globe. Providing design& 3D
            <br />
            Support to Architectural Firms Globally.
            <br />
            Award-Winning Company 17+ Years of Experience.{" "}
          </p>
        </div>
        {/* Addimg Another div */}

        <div className="namedetails">
          <div className="nameimage">

          </div>
        <div className="details">
          Daniel Johns
        </div>
        </div>

        {/* Adding Another div */}

        {/* <div className="namedetails1">
          <div className="nameimage1">

          </div>
        <div className="details1">
          Martha May
        </div>
        </div> */}

        {/* Adding "BUTTON" */}
        <div className="BUTTON2">
          <button className="QWERT">See our work</button>
        </div>
      </div>

      {/* "Another Section in Homepage" */}
      <div className="con">
        <div className="con1">
          <div className="conA">
            <p className="paragraph">
              <h1>
                Over a Decade of <br /> Achievements
              </h1>
              <br />
              <h2 className="heading2">
                With our super power we have reached this.
              </h2>
            </p>
          </div>
          <div className="conB">
            <div className="conBA">
              <div className="conB1">
                <p>
                  <h1>10,000+</h1>
                  <br />
                  <h3>Satisfied clients</h3>
                </p>
              </div>
              <br />
              <div className="conB3">
                <p>
                  <h1>500+</h1>
                  <br />
                  <h3>Projects Completed</h3>
                </p>
              </div>
            </div>
            <div className="conBB">
              <div className="conB2">
                <p>
                  <h1>2 Million</h1>
                  <br />
                  <h3>Skilled Workers</h3>
                </p>
              </div>
              <br />
              <div className="conB2">
                <p>
                  <h1>140</h1>
                  <br />
                  <h3>Countries</h3>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anoter Section in "HOMEPAGE" */}


      <div className="HEADING">
        <h1>OUR TRUSTED CLIENTS</h1>
      </div>
      <div className="companylogo">
        <div className="CL1">SPARK</div>
        <div className="CL1">LOGAZ</div>
        <div className="CL1">SPONA</div>
        <div className="CL1">OLLA</div>
      </div>

      {/* Main Container */}
      <div className="containerxx">
        {/* 1st div */}
        <div className="containerxx1">
          <div className="YY">{/* <p>IMage</p> */}</div>
          <div className="EE">
            Cannadian Construction <br /> Branches.
          </div>
          <div className="EEE">
            We'll Supply YounWith Material To
            <br />
            Create Your Dream Property From
            <br />
            Foundation To Finish.Call To Get
            <br />
            Started!
          </div>
          <div className="EEEE">
            <a href="#">Read More......</a>
          </div>
        </div>

        {/* 2nd div  */}

        <div className="containerxx1">
          <div className="YYY">{/* <p>IMage</p> */}</div>
          <div className="EE">
            Australian Construction <br /> Branches.
          </div>
          <div className="EEE">
            We'll Supply YounWith Material To
            <br />
            Create Your Dream Property From
            <br />
            Foundation To Finish.Call To Get
            <br />
            Started!
          </div>
          <div className="EEEE">
            <a href="#">Read More......</a>
          </div>
        </div>

        {/* 3rd div */}
        <div className="containerxx1">
          <div className="YYYY">{/* <p>IMage</p> */}</div>
          <div className="EE">
            Brazilian Construction <br /> Branches.
          </div>
          <div className="EEE">
            We'll Supply YounWith Material To
            <br />
            Create Your Dream Property From
            <br />
            Foundation To Finish.Call To Get
            <br />
            Started!
          </div>
          <div className="EEEE">
            <a href="#">Read More......</a>
          </div>
        </div>

        {/* 4th div */}
        <div className="containerxx1">
          <div className="YYYYY">{/* <p>IMAGE</p> */}</div>
          <div className="EE">
            Germanium Construction <br /> Branches.
          </div>
          <div className="EEE">
            We'll Supply YounWith Material To
            <br />
            Create Your Dream Property From
            <br />
            Foundation To Finish.Call To Get
            <br />
            Started!
          </div>
          <div className="EEEE">
            <a href="#">Read More......</a>
          </div>
        </div>
      </div>

      {/* New Heading */}
      <div className="DSA">
        <div className="ttt">
          <h1>Let us help you build</h1>
          <h4>
            Over 17 years of experience in creating spaces that positively
            impact people's lives.
          </h4>
        </div>
        <div className="IMG5">
          <div className="IMG6"></div>
        </div>
      </div>

      {/* Next Div "Clients Comments" */}
      <div className="POP">
        <div className="POP1">
          <h1>Few Words From Our Clients</h1>
        </div>
        <div className="POP2">
          <p>
            "We had an incredible experience working with them and were
            impressed they
            <br />
            made such a big difference in only three weeks. Our team is so
            greatful for the
            <br />
            improvements they made and their ability to get familiar with the
            product <br />
            concept so quickly. it acted as a catalystto take our design to the
            next level
            <br />
            and get more eyes on our product.
          </p>
        </div>
        <div className="owner">
          <p className="OWNAME">
            Jane Cooper
            <br />
            <h1 className="OWNAME1">CEO,ABC Corporation </h1>
          </p>
        </div>
      </div>
      


      {/* Another Section containing "FOOTER" */}
      {/* Another Div containing Navbar and Button */}

      <div className="Display">
        {/* Sub "DIV" in Major "DIV" */}
        <div className="Display1">
          <p className="Displaytext">Get a Free Quote Now!</p>
          <div className="form1">
            <label></label>
            <input
              type="text"
              placeholder="Your Work Email adress"
              className="label"
              required
            ></input>
            <button className="Buttaen">Join the Watchlist</button>
          </div>
        </div>
      </div>

      {/* Footer / Main Div in Footer */}
      <div className="footer">
        {/* Another "div" in "Major div" */}
        <div className="subfooter">
          <a href="#" className="LINKS">
            {" "}
            Download Now
          </a>
          <a href="#" className="LINKS">
            {" "}
            License
          </a>
        </div>

        {/* Another "div" in "Major div" */}

        <div className="subfooter1">
          <a href="#" className="LINKS">
            About{" "}
          </a>
          <a href="#" className="LINKS">
            Features{" "}
          </a>
          <a href="#" className="LINKS">
            Pricing{" "}
          </a>
          <a href="#" className="LINKS">
            Careers{" "}
          </a>
          <a href="#" className="LINKS">
            Help{" "}
          </a>
          <a href="#" className="LINKS">
            privacy Policy{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
