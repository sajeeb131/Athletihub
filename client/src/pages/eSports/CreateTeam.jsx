import React, { useState } from 'react';

const CreateTeam = ({ onSubmit }) => {
  const [teamName, setTeamName] = useState('');
  const [sport, setSport] = useState('');
  const [description, setDescription] = useState('');
  const [membersRequired, setMembersRequired] = useState(0);
  const [rankRequired, setRankRequired] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTeam = {
      name: teamName,
      sport: sport,
      description: description,
      membersRequired: membersRequired,
      rankRequired: rankRequired,
      mail: mail,
    };
    onSubmit(newTeam);
    setTeamName('');
    setSport('');
    setDescription('');
    setMembersRequired(0);
    setRankRequired('');
    setMail('');
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
          <label htmlFor="membersRequired">Members Required:</label>
          <input
            type="number"
            id="membersRequired"
            value={membersRequired}
            onChange={(e) => setMembersRequired(parseInt(e.target.value))}
            required
          />
        </div>
        <div>
          <label htmlFor="rankRequired">Rank Required:</label>
          <input
            type="text"
            id="rankRequired"
            value={rankRequired}
            onChange={(e) => setRankRequired(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mail">Mail:</label>
          <input
            type="email"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Create Team Request Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTeam;
