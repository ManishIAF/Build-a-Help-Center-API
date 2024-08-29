import React from 'react';
import { FaRegCopyright } from "react-icons/fa";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Abstract</h4>
        <ul>
          <li>Branches</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Community</h4>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribbble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>
        <h4>Contact Us</h4>
        <p>info@abstract.com</p>
      </div>
      <div className="footer-section-copyright">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/user/276/5760539115195.596f96c5099fc.jpg" 
          alt="Logo" 
          style={{width:'20px', height:'20px', borderRadius:'5px'}} 
        />
        <div>
          <p style={{display:'flex',alignItems:'center',gap:'5px'}}><FaRegCopyright /> Copyright 2024</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
