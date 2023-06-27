import React, { useEffect, useState } from 'react';
import './market.css';
import image from '../../assets/sale.jpg';
import { useNavigate } from 'react-router-dom';
const Post = () => {
  const [formData, setFormData] = useState({
    seller: '',
    itemName: '',
    price: '',
    details: '',
    phone:'',
    image: '',
    type: 'equipment' // Default type value
  });
  const navigate = useNavigate();

  useEffect(()=>{
    const userId = localStorage.getItem('id'); 
    if(!userId){
        navigate('/login')
    }
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/market/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormData({
          seller: '',
          itemName: '',
          price: '',
          details: '',
          phone:'',
          image: '',
          type: 'equipment' // Reset type value to default
        });

        const data = await response.json();
        console.log('New Sale Post Created.', data);
      } else {
        const error = await response.json();
        throw new Error(error.error);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setFormData({ ...formData, image: base64 });
  };

  return (
    <div className="market-post-container">
      <div className="market-post-form-container">
        <form onSubmit={handleSubmit} className="market-post-form">
          <div className="post-form-details">
            <label htmlFor="seller">Seller: </label>
            <input type="text" id="seller" name="seller" value={formData.seller} onChange={handleInputChange} />
          </div>

          <div className="post-form-details">
            <label htmlFor="item">Item: </label>
            <input type="text" id="item" name="itemName" value={formData.itemName} onChange={handleInputChange} />
          </div>

          <div className="post-form-details">
            <label htmlFor="price">Price: </label>
            <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} />
          </div>

          <div className="post-form-details">
            <label htmlFor="phone">Contact: </label>
            <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
          </div>

          <div className="post-form-details">
            <label htmlFor="details">Details: </label>
            <textarea id="details" name="details" value={formData.details} onChange={handleInputChange} />
          </div>

          <div className="post-form-details">
            <label htmlFor="type">Type: </label>
            <select id="type" name="type" value={formData.type} onChange={handleInputChange}>
              <option value="equipment">Equipment</option>
              <option value="gaming">Gaming</option>
              <option value="sports">Sports</option>
            </select>
          </div>

          <div className="post-form-details">
            <label htmlFor="file-upload">Image: </label>
            <input
              type="file"
              id="file-upload"
              name="image"
              accept=".jpeg, .png, .jpg"
              onChange={handleFileUpload}
            />
          </div>

          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="market-post-img">
        <img src={image} alt="Sale" />
      </div>
    </div>
  );
};

export default Post;

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
