import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar.js';
import './home.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    const userId = localStorage.getItem('id'); // Assuming you're storing the user ID in localStorage
    if(!userId){
        navigate('/login')
    }
    const fetchEvents = async () => {
      try {
        const response = await fetch('/home/');
        if (response.ok) {
          const data = await response.json();
          setEvents(data.slice(0, 4)); // Show only the first four events
        } else {
          console.log('Error:', response.statusText);
        }
      } catch (error) {
        console.log('Error:', error.message);
      }
    };

    fetchEvents();
  }, []);

  const handleNotifyClick = async (id, currentPlayers) => {
    try {
      const response = await fetch(`/home/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ players: currentPlayers - 1, username, eventId: id }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Event players updated:', data);
        // Redirect to a new route if needed
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.log('Error:', response.status, errorData.error);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
  

  return (
    <div className="home">
      <Searchbar />
      <div className="home-container-posts">
        <h1>Recent Posts</h1>
        <div className="home-post-grid">
          {events.map((event) => (
            <div className="home-post" key={event._id}>
              <h2>Location: {event.location}</h2>
              <h2>Players needed: {event.players}</h2>
              <h2>Time: {event.time}</h2>
              <h2>Date: {event.date}</h2>

              <div className="home-posted-by">
                <span>Posted by</span>
                <span>{event.username}</span>
              </div>
              <div className="notify">
                <button
                  className="button-join"
                  onClick={() => handleNotifyClick(event._id, event.players)}
                >
                  NOTIFY --&gt;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
