import React from 'react'
import SoundCard from '../components/SoundCard'

const Sounds = ({sounds}) =>
  <div>
    <h3>Sounds Component</h3>
    {sounds.map((sound, index) => <SoundCard key={index} sound={sound} />)}
  </div>

export default Sounds
