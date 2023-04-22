import React, {useState} from 'react';
import Navigation from '../components/Navigation'
import './Common.css'
import Cookies from 'universal-cookie';
import axios from 'axios';
const cookie = new Cookies();


export default function Quiz() {
  const [quiz, setquiz] = useState('');
  const token = cookie.get('token');
  const api = 'http://localhost:5001/api/project/1'
  axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
          setquiz(res.data['quiz']);
        })
  return (
    <div className='experiment-page'>
      <div className='header'>
        <Navigation />
      </div>
      <div className='content'>
        {/* <h5>Quiz</h5> */}
        <p dangerouslySetInnerHTML={{__html: quiz}}></p>
      </div>
    </div>
  )
}
