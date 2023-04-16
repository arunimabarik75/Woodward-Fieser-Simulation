import React from 'react'
import './MainPage.css'
import Button from 'react-bootstrap/Button'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Aim from './Aim.js'

const navigateToAim = () => {
    useNavigate('/aim');
  };

export default function MainPage() {
    return (
        <div className='main-page-background'>  
            <div className='title'>
                <h1>Determination of λmax using Woodward Fieser Rule</h1>
                <Button variant="outline-primary" onClick={navigateToAim}>Login</Button>
                
                &nbsp;&nbsp;&nbsp;&nbsp;
                
                <Button variant="outline-primary" onClick={navigateToAim}>Register</Button>

                <Routes>
                <Route path="/aim" element={<Aim />} />
                <Route path="/" element={<MainPage />} />
                </Routes>
        </div>
        </div>
  )
}
