import React, { useState } from 'react';

const CreateCommunity = ({ onSubmit }) => {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCommunity = {
      name: communityName,
      description: description,
    };
    onSubmit(newCommunity);
    setCommunityName('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create a New Community</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="communityName">Community Name:</label>
          <input
            type="text"
            id="communityName"
            value={communityName}
            onChange={(e) => setCommunityName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Create Community</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCommunity;
