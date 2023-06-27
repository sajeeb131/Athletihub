import React from 'react';
import './home.css';
import image from '../../assets/Background/sportsPage.png';
import { FaSearch } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Searchbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search functionality here
  };

  return (
    <div className='container-search'>
      <div className='img-search-home'>
        <img src={image} alt='' />
      </div>
      <div className='searchbar-container'>
        <form onSubmit={handleSubmit}>
          <div className='searchbar-wrapper'>
            <input type='text' placeholder='Search' />
            <button type='submit'>
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
      <div className='join-now'>
          <Link to="/home/post" className='button-join'>POST</Link>
      </div>
    </div>
  );
};

export default Searchbar;
