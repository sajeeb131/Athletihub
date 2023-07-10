import React from 'react';
import './Tournaments.css';
import {TournamentList} from './helper';
import tournamentBackground from '../../assets/Background/tournament.png'

function Tournaments() {
  return (
    <div className='tournament-container'>
        <div className='tournament-header'>
            <img src={tournamentBackground} alt="" className='tournament-background' />
            <div className='tournament-functions'>
                <h1>Community through Competitions</h1>
                <button>Create an Event</button>
                <button>Find Events</button>
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
    </div>
  )
}

export default Tournaments
