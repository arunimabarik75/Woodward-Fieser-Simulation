import React from 'react'
import Navigation from '../components/Navigation'
import './Common.css'
import CompoundDetails from '../components/CompoundDetails'
import DropdownMenu from '../components/DropdownMenu'

export default function Simulation() {
  return (
    <div className='experiment-page'>
      <div className='header'>
        <Navigation />
      </div>
      <div className='content'>
        <div className="left-side">
          <h5 className='contentHeading'>Simulation</h5>
          <br />
          <DropdownMenu />
          <br />
          <CompoundDetails />
        </div>
        <div className="right-side"></div>        
      </div>
    </div>
  )
}
