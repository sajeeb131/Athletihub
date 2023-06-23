import React from 'react'
import './profile.css'
import image from '../../assets/cool-dog.jpg'
const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile-section'>

        <div className='profile-section-image'>
            <img src={image} alt="" width="250px" height="250px" />
        </div>

        <div className='profile-section-details'>
            <div className='profile-section-details-name'>
                <h1>Jake Paul</h1>
            </div>
            <div className='profile-section-details-bio'>
                <span>@jakepaul23</span>
                <span>jgr@gmail.com</span>
                <span>034165685</span>
            </div>
        </div>

      </div>

      <div className='profile-event-section'>
        <h1>Recent Posts</h1>
        <div className='profile-event'>

        </div>
        <div className='profile-event'>
            
        </div>
        <div className='profile-event'>
            
        </div>
      </div>
    </div>
  )
}

export default Profile
