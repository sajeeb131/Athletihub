import React, { useState, useEffect } from 'react';
import './profile.css';
import image from '../../assets/cool-dog.jpg';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('id'); // Assuming you're storing the user ID in localStorage
        if(!userId){
            navigate('/404')
        }
        const response = await fetch(`/profile/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setProfile(data.profile);
        } else {
          console.log('Error:', response.statusText);
        }
      } catch (error) {
        console.log('Error:', error.message);
      }
    };

    fetchProfile();
  }, []);

  console.log(profile); // Log the profile variable here

  return (
    <div className="profile-container">
      <div className="profile-section">
        <div className="profile-section-image">
          <img src={image} alt="" width="250px" height="250px" />
        </div>

        <div className="profile-section-details">
          <div className="profile-section-details-name">
            {profile && <h1 className="name">{profile.name}</h1>}
          </div>
          <div className="profile-section-details-bio">
            {profile && (
              <>
                <span className="username">@{profile.username}</span>
                <span className="email">{profile.email}</span>
                <span className="phone">{profile.contact}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="profile-event-section">
        <h1>Recent Posts</h1>
        <div className="profile-event"></div>
        <div className="profile-event"></div>
        <div className="profile-event"></div>
      </div>
    </div>
  );
};

export default Profile;
