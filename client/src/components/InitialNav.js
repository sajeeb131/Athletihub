import React from 'react'
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import soccerPlayerImage from '../assets/soccer-player-running-with-the-ball.png';

const InitialNav = () => {
  return (
    <div>
      <nav className='nav'>
        <div className='icon'>
          <img src={soccerPlayerImage} alt="" width="70" height="70" />
          <h1>ATHLETIHUB</h1>
        </div>
        
        <div className='landing-buttons'>
          <Link to="/login" className='button-login'>Log In</Link>
          <Link to="/signup" className='button-signup'>
            <span>Create an </span>
            <span> Account</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default InitialNav
