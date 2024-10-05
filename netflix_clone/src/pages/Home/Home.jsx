import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.jpg';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import TitileCard from '../../components/TitileCard/TitileCard';

export const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={hero_banner} alt="Hero Banner" className='banner-img' />
        <div className='hero-caption'>
          <img src={hero_title} alt="Hero Title" className='caption-img' />
          <p>
            In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
          </p>
          <div className="buttons">
            <button className="play-button">
              <FaPlay className="icon" /> Play
            </button>
            <button className="info-button">
              <FaInfoCircle className="icon" /> More Info
            </button>
          </div>
          <TitileCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
