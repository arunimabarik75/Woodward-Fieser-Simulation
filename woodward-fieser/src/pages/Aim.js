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
      <h5 className='contentHeading'>Aim</h5>
        <p className='contentText'>
          <br />
          Determination of wavelength using Woodward Fieser Rule
          <br />
          <br />
        </p>
        <h5 className='contentHeading'>Objectives</h5>
        <p>
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
