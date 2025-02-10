// src/components/Header.js
import React from "react";
import "./HeaderCss.css";

const Header = () => {
  return (
    <header className="sticky-header">
      <div className="MuiBox-root css-0">
        <div className="row">
          <div className="col-lg-12">
            <nav className="nav_css" >
              <div className="container">
                <div className="MuiBox-root css-nb2z2f">
                  <div>
                    <a href="/" >
                      <img src="https://www.iiitdm.ac.in/img/logo.png" alt="MAI_app" 
                      className="logo-image" />
                    </a>
                  </div>
                </div>

              </div>
            </nav>
          </div>
          <div className="col-lg-12"></div>

        </div>

      </div>
    </header>
  );
};

export default Header;
