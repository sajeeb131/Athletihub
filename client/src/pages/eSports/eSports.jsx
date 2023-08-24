import React, { useState } from 'react';
import './eSports.css';

const SportsCommunityPage = () => {
  const [teamSearchTerm, setTeamSearchTerm] = useState('');
  const [communitySearchTerm, setCommunitySearchTerm] = useState('');

  const handleTeamSearch = (event) => {
    setTeamSearchTerm(event.target.value);
  };

  const handleCommunitySearch = (event) => {
    setCommunitySearchTerm(event.target.value);
  };

  const handleCreateCommunity = () => {
    // create Community
  };

  const handleCreateTeam = () => {
    // create Team
  };

  const handleNotifyByEmail = () => {
    // Mail for Notification
  };

  return (
    <div className="sports-community-page">
      <h1>Sports Community Page</h1>
      
      <div className="search-bars">
        <input
          type="text"
          placeholder="Search Teams..."
          value={teamSearchTerm}
          onChange={handleTeamSearch}
        />
        <input
          type="text"
          placeholder="Search Communities..."
          value={communitySearchTerm}
          onChange={handleCommunitySearch}
        />
      </div>

      <div className="buttons">
        <button onClick={handleCreateCommunity}>Create Community</button>
        <button onClick={handleCreateTeam}>Create Team</button>
      </div>

      <div className="team-requirements">
        <h2>Team Member Requirements</h2>
        <p>Looking for dedicated players to join our soccer team...</p>
        <button onClick={handleNotifyByEmail}>Notify Me</button>
      </div>
    </div>
  );
};

export default SportsCommunityPage;
