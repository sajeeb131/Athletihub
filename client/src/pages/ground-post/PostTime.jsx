import React, { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const PostTime = () => {
  const [saturdayFrom, setSaturdayFrom] = useState('');
  const [saturdayTo, setSaturdayTo] = useState('');
  const [sundayFrom, setSundayFrom] = useState('');
  const [sundayTo, setSundayTo] = useState('');
  const [mondayFrom, setMondayFrom] = useState('');
  const [mondayTo, setMondayTo] = useState('');
  const [tuesdayFrom, setTuesdayFrom] = useState('');
  const [tuesdayTo, setTuesdayTo] = useState('');
  const [wednesdayFrom, setWednesdayFrom] = useState('');
  const [wednesdayTo, setWednesdayTo] = useState('');
  const [thursdayFrom, setThursdayFrom] = useState('');
  const [thursdayTo, setThursdayTo] = useState('');
  const [fridayFrom, setFridayFrom] = useState('');
  const [fridayTo, setFridayTo] = useState('');

  const navigate = useNavigate();
  const { groundId } = useParams();

  


  const handleSubmit = async (e) => {
    e.preventDefault();

    const gameHour = [
      { day: 'Saturday', from: saturdayFrom, to: saturdayTo },
      { day: 'Sunday', from: sundayFrom, to: sundayTo },
      { day: 'Monday', from: mondayFrom, to: mondayTo },
      { day: 'Tuesday', from: tuesdayFrom, to: tuesdayTo },
      { day: 'Wednesday', from: wednesdayFrom, to: wednesdayTo },
      { day: 'Thursday', from: thursdayFrom, to: thursdayTo },
      { day: 'Friday', from: fridayFrom, to: fridayTo },
    ];

    try {
      const postData = {
        gameHour,
      };

      const response = await fetch(`/ground/${groundId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const data = await response.json();
        const updatedGround = data; // Adjust this based on the response structure
        console.log('Time slots updated:', updatedGround);
        navigate('/profile');
      } else {
        // Handle non-successful response
        console.error('Error updating time slots:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating time slots:', error);
    }
  };

  return (
    <div className='ground-post-time-container'>
      <form className='post-form' onSubmit={handleSubmit}>
        <div className='ground-post-basic'>
          <div className='time-range'>
            <label htmlFor='saturday'>Saturday:</label>
            <input
              type='time'
              id='saturday-from'
              value={saturdayFrom}
              onChange={(e) => setSaturdayFrom(e.target.value)}
            />
            <span>to</span>
            <input
              type='time'
              id='saturday-to'
              value={saturdayTo}
              onChange={(e) => setSaturdayTo(e.target.value)}
            />
          </div>
          <div className='time-range'>
            <label htmlFor='sunday'>Sunday:</label>
            <input
              type='time'
              id='sunday-from'
              value={sundayFrom}
              onChange={(e) => setSundayFrom(e.target.value)}
            />
            <span>to</span>
            <input
              type='time'
              id='sunday-to'
              value={sundayTo}
              onChange={(e) => setSundayTo(e.target.value)}
            />
          </div>
          <div className='time-range'>
            <label htmlFor='monday'>Monday:</label>
            <input
              type='time'
              id='monday-from'
              value={mondayFrom}
              onChange={(e) => setMondayFrom(e.target.value)}
            />
            <span>to</span>
            <input
              type='time'
              id='monday-to'
              value={mondayTo}
              onChange={(e) => setMondayTo(e.target.value)}
            />
          </div>
          <div className='time-range'>
            <label htmlFor='tuesday'>Tuesday:</label>
            <input
              type='time'
              id='tuesday-from'
              value={tuesdayFrom}
              onChange={(e) => setTuesdayFrom(e.target.value)}
            />
            <span>to</span>
            <input
              type='time'
              id='tuesday-to'
              value={tuesdayTo}
              onChange={(e) => setTuesdayTo(e.target.value)}
            />
          </div>
          <div className='time-range'>
            <label htmlFor='wednesday'>Wednesday:</label>
            <input
              type='time'
              id='wednesday-from'
              value={wednesdayFrom}
              onChange={(e) => setWednesdayFrom(e.target.value)}
            />
            <span>to</span>
            <input
              type='time'
              id='wednesday-to'
              value={wednesdayTo}
              onChange={(e) => setWednesdayTo(e.target.value)}
            />
          </div>
          <div className='time-range'>
            <label htmlFor='thursday'>Thursday:</label>
            <input
              type='time'
              id='thursday-from'
              value={thursdayFrom}
              onChange={(e) => setThursdayFrom(e.target.value)}
            />
            <span>to</span>
            <input
              type='time'
              id='thursday-to'
              value={thursdayTo}
              onChange={(e) => setThursdayTo(e.target.value)}
            />
          </div>
          <div className='time-range'>
            <label htmlFor='friday'>Friday:</label>
            <input
              type='time'
              id='friday-from'
              value={fridayFrom}
              onChange={(e) => setFridayFrom(e.target.value)}
            />
            <span>to</span>
            <input
              type='time'
              id='friday-to'
              value={fridayTo}
              onChange={(e) => setFridayTo(e.target.value)}
            />
          </div>

          <div className='ground-next-button'>
            <button type='submit'>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostTime;
