import React from 'react';

const Home = () => {
  // Retrieve the username from local storage
  const username = localStorage.getItem('username');

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>You are logged in!</p>
    </div>
  );
};

export default Home;
