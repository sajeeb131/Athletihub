import React, { useState, useEffect } from 'react';
import './Tournaments.css';
import {TournamentList} from './helper';
import tournamentBackground from '../../assets/Background/tournament.png';
import { Link, useNavigate } from 'react-router-dom';

const Tournaments = () => {
    const [tournaments, setTournaments] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        fetch('/tournaments/')
        .then(response => response.json())
        .then(data => setTournaments(data))
        .catch(error => console.error('Error fetching data: ', error))
    }, []);


  return (
    <div className='tournament-container'>
        <div className='tournament-header'>
            <img src={tournamentBackground} alt="" className='tournament-background' />
            <div className='tournament-functions'>
                <h1>Community through Competitions</h1>
                <Link to="/tournaments/post">Create an Event </Link>
                <Link>Find Events</Link>
            </div>
        </div>
        <div>
            <div className='tournament-content'>
                <h1>Featured Tournaments</h1>
                <div className='featured-list'>
                    {TournamentList.map((Item, key) =>{
                    return(
                        <div className='featuredItem'>
                            <img src={Item.image} />
                            <h1> {Item.name} </h1>
                            <div className='left'>
                                <h2> {Item.game} </h2>
                                <p> {Item.date} </p>
                                <p> {Item.location} </p>
                            </div>
                            <button id='register'>Register</button>
                        </div>
                    )   
                    })}
                </div>
            </div>
        </div>

        <div className='recent-container'>
            <h1>Recent Tournaments</h1>
            <div className='recent-tournaments'>
                    {tournaments.map((tournament) => (
                        <div className='single-box' key={tournament._id}>
                            <h2>{tournament.name}</h2>
                            <h3>{tournament.game}</h3>
                            <h3>{tournament.location}</h3>
                            <h3>{tournament.date}</h3>
                        </div>
                    ))}
            </div>
        </div>

    </div>
  )
}

export default Tournaments
