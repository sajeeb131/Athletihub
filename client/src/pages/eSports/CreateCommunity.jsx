import React, { useState } from 'react';

const CreateCommunity = ({ onSubmit }) => {
  const [communityName, setCommunityName] = useState('');
  const [description, setDescription] = useState('');
  const [game, setGame] = useState('');
  const [privacy, setPrivacy] = useState('public'); // Default value is public

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCommunity = {
      name: communityName,
      description: description,
      game: game,
      privacy: privacy,
    };
    onSubmit(newCommunity);
    setCommunityName('');
    setDescription('');
    setGame('');
    setPrivacy('public');
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
          <label htmlFor="game">Game Name:</label>
          <input
            type="text"
            id="game"
            value={game}
            onChange={(e) => setGame(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="privacy">Privacy:</label>
          <select
            id="privacy"
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div>
          <button type="submit">Create Community</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCommunity;
