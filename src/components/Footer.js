import React from 'react'
import '../components/Footer.css';
// import { Link } from 'react-router-dom';



const Footer = () => (
    <div className="footer-container">
        <div className="socialLinks">
            <a href="https://www.facebook.com"><i className="social__icon fab fa-facebook"></i></a>
            <a href="https://twitter.com"><i className="social__icon fab fa-twitter"></i></a>
            <a href="https://instagram.com" ><i className="social__icon fab fa-instagram"></i></a>
        </div>
        <p className="footer-text">"Road to Hire Copyright 2020 All Rights Reserved "</p>
    </div>
);

export default Footer;
