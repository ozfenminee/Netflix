import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/netflix_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../firebase';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-profile')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img className='navbar-left-img' src={logo} alt="Netflix Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <FontAwesomeIcon icon={faSearch} className='icons' />
        <p>Children</p>
        <FontAwesomeIcon icon={faBell} className='icons bell-icon' />
        <div className='navbar-profile' onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faUser} className='icons' />
          <FontAwesomeIcon icon={faCaretDown} className='icons' />
          {isDropdownOpen && (
            <div className='dropdown'>
              <p onClick={logout}>Sign Out of Netflix</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
