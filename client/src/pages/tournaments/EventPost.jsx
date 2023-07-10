import React from 'react';
import EventPic from '../../assets/EventPost.png';
import './EventPost.css';

function EventPost() {
  return (
    <div className='container'>
    <div className='eventPost'>
      <div className='leftSide'>
        <img src={EventPic} alt=""/>
      </div>
      <div className='rightSide'>
            <h1>Create Event</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your tournamnet name"/>

                <label htmlFor="image">Banner</label>
                <input type="file" id="image" name="image" />

                <label htmlFor="game">Game</label>
                <input type="text" id="game" name="game" placeholder="Enter your game name"/>

                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date"/>

                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" placeholder="Enter your venue"/>
                <button type='submit'>Create</button>
            </form>
      </div>
    </div>
    </div>
  )
}

export default EventPost
