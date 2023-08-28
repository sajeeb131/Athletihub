import React, { useState, useEffect } from 'react';
import './eSports.css';
import { Link } from 'react-router-dom';
import { CommunityList } from './Communities';

const SportsCommunityPage = () => {
  const [teamSearchTerm, setTeamSearchTerm] = useState('');
  const [communitySearchTerm, setCommunitySearchTerm] = useState('');
  const [searchedCommunity, setSearchedCommunity] = useState(null);

  const handleTeamSearch = (event) => {
    setTeamSearchTerm(event.target.value);
  };

  const handleCommunitySearch = (event) => {
    setCommunitySearchTerm(event.target.value);
    const searchedCommunity = CommunityList.find(
      (community) =>
        community.name.toLowerCase() === event.target.value.toLowerCase()
    );
    setSearchedCommunity(searchedCommunity);
  };

  const handleMailClick = () => {
    // Open default mail app
    window.open('mailto:'); // Add recipient email if needed
  };

  return (
    <div className="sports-community-page">
      <div className="search-container">
        <div className="search-bars">
          <h1 className="mainTitle">E-Sports Community</h1>
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
        <Link className="btn" to="/CreateCommunity">
          Create Community
        </Link>
        <Link className="btn" to="/CreateTeam">
          Create Member Post
        </Link>
      </div>

      {searchedCommunity && (
        <div className="searched-community-details">
          <h2>{searchedCommunity.name}</h2>
          <p>{searchedCommunity.game}</p>
          <p>{searchedCommunity.date}</p>
          <p>{searchedCommunity.location}</p>
          <button className="join-button"><a href="https://www.facebook.com/groups/csgobd">Join</a></button>
        </div>
      )}

      <div className="community-container">
        <h1>Popular Gaming Communities</h1> <br />
        <div className="communities">
          {CommunityList.map((Item, key) => {
            return (
              <div className="popularComs" key={key}>
                <img src={Item.image} alt={Item.name} />
                <div className="item-details">
                  <h2>{Item.name}</h2>
                  <p>{Item.game}</p>
                  <p>{Item.date}</p>
                  <p>{Item.location}</p>
                </div>
                 
                  <button className="Communi-btn"><a href="https://www.facebook.com/groups/1396806887194790">Join</a></button>
                
                
              </div>
            );
          })}
        </div>
      </div>
      <div className="team-container">
        <h1>Teams: Member Needed</h1>
        <div className="team-box">
          <h2>Fnatic</h2>
          <p>Team Member Required: 2</p>
          <p>Game Name: Valorant</p>
          <p>Game Rank: Plat-Minimum</p>
          <p>Mail: fnaticmanager@gmail.com</p>
          <button className="mail-button" onClick={handleMailClick}>
            Mail
          </button>
        </div>
        <div className="team-box">
          <h2>Sentinels</h2>
          <p>Team Member Required: 5</p>
          <p>Game Name: CSGO 2</p>
          <p>Game Rank: Diamond-Minimum</p>
          <p>Mail: sentinelsmanager@gmail.com</p>
          <button className="mail-button" onClick={handleMailClick}>
            Mail
          </button>
        </div>
        <div className="team-box">
          <h2>Guards Team</h2>
          <p>Team Member Required: 1</p>
          <p>Game Name: Apex Legends</p>
          <p>Game Rank: Rookie-Minimum</p>
          <p>Mail: guardsmanager@gmail.com</p>
          <button className="mail-button" onClick={handleMailClick}>
            Mail
          </button>
        </div>
      </div>
    </div>
  );
};

export default SportsCommunityPage;
