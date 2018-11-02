import React from 'react'

const SoundCard = ({ sound }) =>
  <div>
    <h5>Title: {sound.title} </h5>
    <p>Description: {sound.description} </p>
    <button>Play</button>
  </div>

export default SoundCard
