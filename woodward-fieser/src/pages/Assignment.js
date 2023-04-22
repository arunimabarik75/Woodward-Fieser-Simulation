import React, {useState} from 'react'
import Navigation from '../components/Navigation'
import './Common.css'
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookie = new Cookies();

export default function Assignment() {
  const [assignment, setassignment] = useState('');
  const token = cookie.get('token');
  const api = 'http://localhost:5001/api/project/1'
  axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
          setassignment(res.data['assignment']);
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
      <div className='content'>
      {/* <h5>Assignment</h5> */}
      <p dangerouslySetInnerHTML={{__html: assignment}}></p>
      </div>
    </div>
  )
}
