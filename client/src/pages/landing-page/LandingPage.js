import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import soccerPlayerImage from '../../assets/soccer-player-running-with-the-ball.png';
import footballPlayground from '../../assets/playground.jpg'
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className=''>
      <nav className='nav'>
        <div className='icon'>
          <img src={soccerPlayerImage} alt="" width="70" height="70" />
          <h1>ATHLETIHUB</h1>
        </div>
        
        <div className='buttons'>
          <Link to="/login" className='button-login'>Log In</Link>
          <Link to="/signup" className='button-signup'>
            <span>Create an </span>
            <span> Account</span>
          </Link>
        </div>
      </nav>

      <div className='container'>
        <img src={footballPlayground} alt="" className='full-width-image' />
        <div className='header'>
          <h1>Bangladesh's Only Athlete Site</h1>
          <span>Unlock your true athletic freedom</span>
        </div>
        <div className='join-now'>
          <Link to="/login" className='button-join'>JOIN NOW!</Link>
        </div>

      </div>
      <div className='about'>
        <h1 style={{ textAlign: 'left' }}>About us:</h1>
        <p style={{ textAlign: 'left' }}>
          Athletihub is a platform to find other athletes to split field rent to play various sports.
          It's a compact all-in-one site to find other active people who are enthusiasts about both sports and e-sports.
        </p>
      </div>

    </div>
  )
}

export default LandingPage;
