import React from 'react'
import Navigation from '../components/Navigation'
import './Common.css'

export default function Aim() {
  return (
    <div className='experiment-page'>
      <div className='header'>
        <Navigation />
      </div>
      <div className='content'>
        <p>Aim
          <br />
          Determination of wavelength using Woodward Fieser Rule
          <br />
          <br />
          Objectives
          <br />
          1)To understand the Woodward Fieser Rule using UV spectroscopy
          <br />
          2)To calculate the maximum wavelength of an organic compound using Woodward Fieser Rule
          <br />
        </p>
      </div>
    </div>
  )
}
