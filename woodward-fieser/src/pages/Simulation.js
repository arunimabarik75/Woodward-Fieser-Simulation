import React from 'react'
import Navigation from '../components/Navigation'
import CompoundDetails from '../components/CompoundDetails'
import './Common.css'

export default function Simulation() {
  return (
    <div className='experiment-page'>
      <div className='header'>
        <Navigation />
      </div>
      <div className='content'>
        <h5 className='contentHeading'>Simulation</h5>
        <p className='contentText'>    </p>
        <div className="left-side">
          <CompoundDetails />
        </div>
        <div className="right-side"></div>        
      
      </div>
    </div>
  )
}
