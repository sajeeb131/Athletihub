import React from 'react'

function featuredItem(name, image, game, date, location) {
  return (
    <div className='featuredItem'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <h2> {game} </h2>
      <p> {date} </p>
      <p> {location} </p>
    </div>
  )
}

export default featuredItem;
