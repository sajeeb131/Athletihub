import React, { useState, useEffect } from 'react';
import img1 from '../../assets/Background/1.png';
import './ground.css';
import { useParams } from 'react-router-dom';

const GroundProfile = () => {
    const [timeSlots, setTimeSlots] = useState([]);
    const { id } = useParams(); // Retrieve the ground ID from URL parameters
    const [groundImage, setGroundImage] = useState('');
    useEffect(() => {
      const fetchTimeSlots = async () => {
        try {
          const response = await fetch(`/ground/groundprofile/${id}`);
          if (response.ok) {
            const data = await response.json();
            setTimeSlots(data);
             setGroundImage(data.image);
          } else {
            console.error('Error fetching time slots:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching time slots:', error);
        }
      };
  
      fetchTimeSlots();
    }, [id]);

  return (
    <div className='groundProfile-container'>
      <div className='groundProfile-info'>
        <div className='info-section1'>
          <div className='section1 section1-book'>
            <div className='section1-titlebox'>
              <h2>Book a slot</h2>
            </div>
            <div className='section1-box'>
              <ul>
                {timeSlots.map((timeSlot, index) => (
                  <li className="groundprofile-li" key={index}>
                    {timeSlot.day}: {timeSlot.from} - {timeSlot.to}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='section1 section1-offers'>
            <div className='section1-titlebox'>
              <h2>Offers</h2>
            </div>
            <div className='section1-box'>
            <div className='section1-box-notice'>No Available offers</div>
            </div>
          </div>
          <div className='section1 section1-notice'>
            <div className='section1-titlebox'>
              <h2>NoticeBoard</h2>
            </div>
            <div className='section1-box'><div className='section1-box-notice'>No further notice</div></div>
          </div>
        </div>
        <div className='info-section2'>
            <div className='groundProfile-name'>Jaff</div>
        </div>
      </div>
      <div className='groundProfile-image'>
        <img src={img1} alt='' />
      </div>
    </div>
  );
};

export default GroundProfile;
