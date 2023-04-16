import React from 'react'
import Navigation from '../components/Navigation'
import './Common.css'

export default function Simulation() {
  return (
    <div className='experiment-page'>
      <div className='header'>
        <Navigation />
      </div>
      <div className='content'>
        <p>Simulation</p>
      </div>
    </div>
  )
}
