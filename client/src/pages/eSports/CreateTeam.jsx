import React, { useState } from 'react';

const CreateTeam = ({ onSubmit }) => {
  const [teamName, setTeamName] = useState('');
  const [sport, setSport] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTeam = {
      name: teamName,
      sport: sport,
      description: description,
    };
    onSubmit(newTeam);
    setTeamName('');
    setSport('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create a New Team</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="teamName">Team Name:</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="sport">Sport:</label>
          <input
            type="text"
            id="sport"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
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
          <button type="submit">Create Team</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTeam;
