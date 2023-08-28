import React from 'react';
import EventPic from '../../assets/EventPost.png';
import { useNavigate} from 'react-router-dom'
import { useState } from 'react';
import './EventPost.css';

const EventPost = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [game, setGame] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [prizePool, setprizePool] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await fetch('/tournaments/create', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, game, date, location, prizePool}),
      });
      if(response.ok){
        setName('');
        setGame('');
        setDate('');
        setLocation('');
        setprizePool('');

        const data = await response.json();
        //Successful
        console.log('Tournament Created: ', data);
        navigate('/tournaments');
      }else{
        const errorData = await response.json();
        console.log('Error:', errorData.error);
      }

    }catch(error){
      console.log(error.message);
    }
  };

  return (
    <div className='container'>
    <div className='eventPost'>
      <div className='leftSide'>
        <img src={EventPic} alt=""/>
      </div>
      <div className='rightSide'>
            <h1>Create Tournament</h1>
            <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your tournament name"
                  value={name} onChange={(e)=> setName(e.target.value)}/>

                <label htmlFor="game">Game</label>
                <input type="text" id="game" name="game" placeholder="Enter your game name"
                  value={game} onChange={(e) => setGame(e.target.value)}/>

                <label htmlFor="date">Date</label>
                <input type="date" id="date" name="date" 
                value={date} onChange={(e) => setDate(e.target.value)}/>

                <label htmlFor="location">Location</label>
                <input type="text" id="location" name="location" placeholder="Enter your venue"
                  value={location} onChange={(e) => setLocation(e.target.value)}/>

                <label htmlFor="prizePool">Prize Pool</label>
                <input type="text" id="prizePool" name="prizePool" placeholder="Prize Pool?"
                  value={prizePool} onChange={(e) => setprizePool(e.target.value)}/>
                <button type='submit'>Create</button>
            </form>
      </div>
    </div>
    </div>
  )
}

export default EventPost
