import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import './Common.css'
import CompoundDetails from '../components/CompoundDetails'
import DropdownMenu from '../components/DropdownMenu'
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookie = new Cookies();


export default function Simulation() {
  const [simulation, setSimulation] = useState();
  const token = cookie.get('token');
  const [img, setImg] = useState('')
  const [lmax, setLmax] = useState('')
  const selectedCompound = (e) => {
    e = Number(e)
    console.log(typeof e);

    const api = 'http://localhost:5001/api/project/1'
    axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
          .then(res => {
            setSimulation(res.data['simulation']);
            console.log(res)
            console.log(simulation)
            const lst = simulation[e-1];
            setImg(lst['img'])
            setLmax(lst['lmax'])
            console.log(lst['lmax'])
          })
      
  }
  return (
    <div className='experiment-page'>
      <div className='header'>
        <Navigation />
      </div>
      <div className='content'>
        <div className="left-side">
          <h5>Simulation</h5>
          <br />
          <DropdownMenu selectedCompound={selectedCompound} />
          <br />
          <CompoundDetails lmax={lmax} />
        </div>
        <div className="right-side"><p dangerouslySetInnerHTML={{__html: img}}></p></div>        
      </div>
    </div>
  )
}
