import React from 'react'
import Navigation from '../components/Navigation'
import './Common.css'

export default function Quiz() {
  return (
    <div className='experiment-page'>
      <div className='header'>
        <Navigation />
      </div>
      <div className='content'>
      <h5 className='contentHeading'>Quiz</h5>
      <p className='contentText'>    </p>
      </div>
    </div>
  )
}
