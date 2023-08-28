import React, { useState,  useEffect } from 'react';
import image from '../../assets/Background/signup.png';
import icon from '../../assets/Icon/avatar.png';
import './signup.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const { accountType } = useParams();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {email, password, username, name, contact, accountType }
    const response = await fetch('/user/signup', {
      method:'POST',
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if(!response.ok) {
      setError(json.error)
    }
    if(response.ok){
      setUsername('');
      setEmail('');
      setPassword('');
      setName('');
      setContact('');

      setError(null)
      console.log('new user added', json)
      if(accountType =="Promoter"){
        navigate('/ground-post')
      }
      else{
        navigate('/')
      }
      
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
            <label>Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='labels'>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='labels'>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='labels'>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='labels'>
            <label>Contact</label>
            <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div >
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
