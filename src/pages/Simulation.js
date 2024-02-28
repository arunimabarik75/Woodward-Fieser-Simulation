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
  const [name,setName] = useState('')
  const selectedCompound = (e) => {
    e = Number(e)
    var nn = ''
    if (e === 1){
      nn = '2,4-dimethylpenta-1,3-diene';
    }
    else if(e === 2){
      nn = '1-methylcyclohexa-1,3-diene';
    }
    else if(e === 3){
      nn = '3-methoxy-10-methyl-2,7,8,9,10,11,12,13,14,15,16,17-dodecahydro-1H-cyclopenta[a]phenanthrene';
    }
    else if(e === 4){
      nn = '10,13-dimethyl-2,3,9,10,11,12,13,15,16,17-decahydro-1H-cyclopenta[a]phenanthrene';
    }
    else if(e === 5){
      nn = 'Heteroannular Diene';
    }
    else if(e === 6){
      nn = 'Cisoid Diene';
    }
    
    console.log(typeof e);

    const api = 'http://localhost:5001/api/project/1'
    axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
          .then(res => {
            setSimulation(res.data['simulation']);
            console.log(res)
            console.log(simulation)
            const lst = simulation[e-1];
            setName(nn)
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
        <div className="right-side">
          <p dangerouslySetInnerHTML={{__html: img}}></p>
          {console.log(img)}
          <p className='nameImg'>Name: {name}</p>
          </div>        
      </div>
    </div>
  )
}
