import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("running use effect")
    // Clear specific localStorage items
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    // Redirect to the home page
    navigate('/');
  },[] );

  return <div></div>;
};

export default Logout;

