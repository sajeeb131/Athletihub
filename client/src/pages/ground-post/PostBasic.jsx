import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './post.css';

const PostBasic = () => {
  const [ownerName, setOwnerName] = useState('');
  const [groundName, setGroundName] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState(null);
  const [contact, setContact] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const _new = {ownerName, groundName, location, image, contact, details}
      
      const response = await fetch('/ground/', {
        method: 'POST',
        body: JSON.stringify(_new),
        headers: {
          'Content-Type': 'application/json'
        }
        
      });
      const json = await response.json()
      const groundId = json._id
      if(!response.ok){
        setError(json.error)
      }
      if(response.ok){
        console.log('new ground added', json)
      }

      navigate(`/ground-post-time/${groundId}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  return (
    <div className="ground-post-container">
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="ground-post-basic">
          <label htmlFor="owner-name">Owner Name</label>
          <input
            type="text"
            id="owner-name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
          <label htmlFor="ground-name">Ground Name</label>
          <input
            type="text"
            id="ground-name"
            value={groundName}
            onChange={(e) => setGroundName(e.target.value)}
          />
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label htmlFor="details">Details</label>
          <input
            type="textarea"
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            accept=".jpeg, .png, .jpg"
            onChange={handleFileUpload}
          />

          <div className="ground-next-button">
            <button type="submit">Next</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostBasic;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
