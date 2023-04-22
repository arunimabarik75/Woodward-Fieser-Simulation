import React, {useState} from 'react'
import Navigation from '../components/Navigation'
import './Common.css'
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookie = new Cookies();

export default function Aim() {
  const [aim, setAim] = useState('');
  const token = cookie.get('token');
  const api = 'http://localhost:5001/api/project/1'
  axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
          setAim(res.data['aim']);
            // console.log(res.data);
        this.setState({
            items: res.data,  /*set response data in items array*/
            isLoaded : true,
            redirectToReferrer: false
        })})
  return (
    <div className='experiment-page'>
      <div className='header'>
        <Navigation />
      </div>
      <div className='content' >
        <p dangerouslySetInnerHTML={{__html: aim}}></p>
      {/* <h5>Aim</h5><br/> */}
      </div>
    </div>
  )
}
