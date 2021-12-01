import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './App.css';

function LogIn({ setCurrentUser }) {
  const [lessons, setLessons] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showForm, setShowForm] = useState(false)
  // const history = useHistory()
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            // history.push("/home")
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }

  
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

  const LogInForm = (() => {
      return (
        <div className="authForm">

        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <p>
            <label 
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </p>
          <p>
            <label 
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <p><button type="submit">Log In</button></p>
          <p>-- or --</p>
          <p><Link to="/signup">Sign Up</Link></p>
        </form>
      </div>   
      )
  })



  return (
    <div>
      <header>  
        <button onClick={() => setShowForm(!showForm)}> Log In </button> 
        {showForm && LogInForm()}
        </header>
      {/* <header>Sign Up</header> */}
      <h1> Public Dance Schedule </h1>
      {lessonsList}
    </div>
  );
}

export default LogIn;


//At Least Six
 
//Login Post request
//Login Get request
//Logout request 
//Lesson Delete request
//Lesson Add Request
//Lessons Post Request