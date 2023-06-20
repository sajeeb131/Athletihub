import React, { useState,  useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import image from '../../assets/Background/signup.png';
import icon from '../../assets/Icon/avatar.png';


const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      if (response.ok) {
        const data = await response.json();
        // Handle successful login
        console.log('Logged in:', data);
        // Store the username in local storage
        localStorage.setItem('username', data.username);
        navigate('/home');
      } else {
        const errorData = await response.json();
        // Handle incorrect credentials or other errors
        console.log('Error:', errorData.error);
        alert('Invalid username or password');
      }  
    }catch (error) {
      // Handle network or server errors
      console.log('Error:', error.message);
      alert('An error occurred');
    }
    

  };

  return (
    <div className='container'>
      <div className='image-container'>
        <img src={image} alt="" className='img' />
      </div>
      <div className='form-container'>
        <h1>Create Your Account</h1>
        <div className='icon-container'>
          <img src={icon} alt="" width="80px" height="80px" />
        </div>

        <form onSubmit={handleSubmit}>
          
          <div className='labels'>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='labels'>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

