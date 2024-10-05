import React from 'react'
import './Navbar.css'
import logo from '../../assets/netflix_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
      <img className='navbar-left-img' src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular </li>
        <li>My List</li>
        <li>Browse by Language</li>
      </ul>
      </div>
      <div className='navbar-right'>
      <li>
      <FontAwesomeIcon icon={faSearch} />
      </li>
      </div>
    </div>
  )
}
export default Navbar;
