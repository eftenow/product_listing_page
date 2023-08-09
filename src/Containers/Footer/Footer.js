import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">T&C</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Return Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="#">tsvetan.eftenov@gmail.com</a></li>
                        <li>+359 88 123 4567</li>
                        <li>Veliko Tarnovo, Bulgaria</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 My Outfit</p>
            </div>
        </footer>
    );
}

export default Footer;
