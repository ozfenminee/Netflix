import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/netflix_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Ekrandaki herhangi bir yere tıklanıldığında dropdown'ı kapatmak için useEffect kullanıyoruz.
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Eğer tıklanan yer navbar-profile alanı değilse dropdown'ı kapat
      if (!event.target.closest('.navbar-profile')) {
        setIsDropdownOpen(false);
      }
    };

    // Document üzerinde tıklamaları dinlemek için bir event listener ekliyoruz.
    document.addEventListener('mousedown', handleClickOutside);

    // Component unmount olduğunda event listener'ı kaldırıyoruz.
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
          <FontAwesomeIcon icon={faUser} className='icons' /> {/* Profile icon */}
          <FontAwesomeIcon icon={faCaretDown} className='icons' /> {/* Caret down icon */}
          {isDropdownOpen && (
            <div className='dropdown'>
              <p>Sign Out of Netflix</p> {/* Dropdown menüsü */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
