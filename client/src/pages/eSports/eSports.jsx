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
      <div className="search-container">
      
        <div className="search-bars">
      <h1 className='mainTitle'>E-Sports Community</h1>
          <input
            type="text"
            placeholder="Search Teams"
            value={teamSearchTerm}
            onChange={handleTeamSearch}
          />
          <input
            type="text"
            placeholder="Search Communities"
            value={communitySearchTerm}
            onChange={handleCommunitySearch}
          />
        </div>
      </div>

      <div className="esportsbuttons">
        <h2>Create your Own</h2>
        <button className='btn' onClick={handleCreateCommunity}>Create Community</button>
        <button className='btn' onClick={handleCreateTeam}>Create Team</button>
      </div>

      <div className="team-requirements">
        <h2>Team Member Requirements</h2>
        <p>Looking for dedicated players to join our pingpong team...</p>
        <button className='btnNotify' onClick={handleNotifyByEmail}>Notify Me</button>
      </div>
    </div>
  );
};

export default SportsCommunityPage;
