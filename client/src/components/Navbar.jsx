import React from 'react';
import { Link } from 'react-router-dom';
import soccerPlayerImage from '../assets/soccer-player-running-with-the-ball.png';
import '../pages/landing-page/LandingPage.css'
import styles from './navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <div className='icon'>
          <img src={soccerPlayerImage} alt="" width="70" height="70" />
          <h1>ATHLETIHUB</h1>
        </div>
        
        <div className='buttons'>
          <Link to="/home" className='button-sports'>Sports</Link>
          <Link to="/" className='button-Gaming'>Gaming</Link>
          <Link to="/" className='button-Esports'>E-sports</Link>
          <Link to="/tournaments" className='button-Tournaments'>Tournaments</Link>
          <Link to="/market" className='button-Marketplace'>MarketPlace</Link>
          <Link to="/profile" className='button-Marketplace'>Profile</Link>
          <Link to="/logout" className='button-Marketplace'>Logout</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
