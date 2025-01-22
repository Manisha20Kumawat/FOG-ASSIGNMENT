import React from "react";
import './Footer.css';

const Footer = () => (
  <div className="footer py-5" style={{ backgroundColor: "#FAF3EA", height: "270px" }}>
    <div className="container">
      <div className="row text-center py-5">
        {/* Column 1: High Quality */}
        <div className="col-md-3 d-flex">
          <i className="bi bi-trophy footer-icon"></i>
          <div className="footer-text text-start ms-3">
            <h5>High Quality</h5>
            <p>Crafted from top materials</p>
          </div>
        </div>

        {/* Column 2: Warranty Protect */}
        <div className="col-md-3 d-flex">
          <i className="bi bi-shield-lock footer-icon"></i>
          <div className="footer-text text-start ms-3">
            <h5>Warranty Protect</h5>
            <p>Over 2 Years</p>
          </div>
        </div>

        {/* Column 3: Free Shipping */}
        <div className="col-md-3 d-flex">
          <i className="bi bi-truck footer-icon"></i>
          <div className="footer-text text-start ms-3">
            <h5>Free Shipping</h5>
            <p>Order Over $150</p>
          </div>
        </div>

        {/* Column 4: 24/7 Support */}
        <div className="col-md-3 d-flex">
          <i className="bi bi-headset footer-icon"></i>
          <div className="footer-text text-start ms-3">
            <h5>24/7 Support</h5>
            <p>Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;