import React from 'react'
import './MainPage.css'
import AuthButton from '../components/AuthButton.js'

export default function MainPage() {
    return (
        <div className='main-page-background'>  
            <div className='title'>
                <h1>Determination of λmax using Woodward Fieser Rule</h1>
                <AuthButton />
        </div>
        </div>
  )
}
