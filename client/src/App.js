import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [lessons, setLessons] = useState([])
  
  // state = {
  //   lessons: []
  // }
  
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
  // console.log(lessonsList)
  // console.log(this.setLessons.title)

  // const LogInButton = {
  //   return (

  //   )
  // }


  return (
    <div>
      <header>Log In</header>
      <header>Sign Up</header>
      <h1> Public Dance Schedule </h1>
      {lessonsList}
    </div>
  );
}

export default App;


//At Least Six
//Lessons Post Request 
//Login Post request
//Lesson Delete request
//Logout request 
//