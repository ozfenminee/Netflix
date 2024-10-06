import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <FontAwesomeIcon icon={faInstagram} className="icon" />
        <FontAwesomeIcon icon={faFacebook} className="icon" />
        <FontAwesomeIcon icon={faYoutube} className="icon" />
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centers</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@ 1997-2023 Netflix, Inc.</p>
    </div>
  );
}

export default Footer;
