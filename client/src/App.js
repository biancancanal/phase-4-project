import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import LogIn from './components/LogIn.js';
import './App.css';

function App() {
  const [lessons, setLessons] = useState([])
  
  
useEffect(() => {
    fetch('/lessons')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
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

  const LogInButton = (() => {
    fetch('/login')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  })



  return (
    <div>
      <header>  
        <button onClick={LogInButton}> Log In </button> 
        </header>
      <header>Sign Up</header>
      <h1> Public Dance Schedule </h1>
      {lessonsList}
    </div>
  );
}

export default App;


//At Least Six
 
//Login Post request
//Login Get request
//Logout request 
//Lesson Delete request
//Lesson Add Request
//Lessons Post Request