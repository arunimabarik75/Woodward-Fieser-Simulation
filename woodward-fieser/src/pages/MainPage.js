import React from 'react'
import './MainPage.css'
import LoginButton from '../components/LoginButton'
import RegisterButton from '../components/RegisterButton'

function MainPage() {
    return (
        <div className='main-page-background'>  
            <div className='title'>
          <br />
          <h1>Determination of λmax using Woodward Fieser Rule</h1>
          <br />
          <LoginButton />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <RegisterButton />
          
        </div>
        </div>
  )
}

export default MainPage;