import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="footer-links">
          <a href="/privacy-policy">Privacy policy</a>
          <span>|</span>
          <a href="/terms-conditions">Terms & conditions</a>
          <span>|</span>
          <a href="/contact-us">Contact us</a>
        </div>
        <div className="footer-copyright">
          <strong>All copyrights Reserved @MAI</strong>
        </div>
        <div className="footer-social">
          <span>Social networks:</span>
          <FaFacebookF />
          <FaTwitter />
          <FaGoogle />
          <FaInstagram />
          <FaLinkedinIn />
          <FaWhatsapp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
