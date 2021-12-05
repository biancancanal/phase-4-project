import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogIn from './LogIn';

function Home() {
  const [lessons, setLessons] = useState([])
  const history = useHistory()

  
    
useEffect(() => {
  fetch('/lessons')
  .then(res => res.json())
  .then(data => {
      setLessons(data)
  })
}, [])

const lessonsList = lessons.map(l => {
  return (
    <div key={l.id}> 
    <h2 >{l.title}</h2>
    <p>{l.description}</p>
    <p>{l.teacher.name}</p>
  </div>
  )
  })


  return (
   
    <div>
      <header>  
        <button> <Link to="/login"> Teacher Log In </Link> </button> 
        </header>
      <h1> Public Dance Schedule </h1>
      {lessonsList}
    </div>
  );
}

export default Home;
