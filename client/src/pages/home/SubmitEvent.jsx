import React, { useState } from 'react';
import './home.css';
import DatePicker from 'react-datepicker'
import { useNavigate} from 'react-router-dom'

const EventForm = () => {
    const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [players, setPlayers] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/home/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, location, players, time, date }),
      });

      if (response.ok) {
        setUsername('');
        setLocation('');
        setPlayers('');
        setTime('');
        setDate('');

        const data = await response.json();
        // Handle successful submission
        console.log('Event created:', data);
        navigate('/home')
      } else {
        const errorData = await response.json();
        // Handle error response
        console.log('Error:', errorData.error);
      }
    } catch (error) {
      // Handle network or server errors
      console.log('Error:', error.message);
    }
  };

  return (
    <div className="event-form">
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="players">Players:</label>
          <input
            type="text"
            id="players"
            className="form-control"
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <DatePicker
            id="date"
            className="form-control"
            selected={date}
            onChange={(selectedDate) => setDate(selectedDate)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select Date"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventForm;
