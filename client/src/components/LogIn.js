import React, { useState, Link } from 'react';
// import { Link } from 'react-router-dom';
import '../App.css';


function LogIn({ setCurrentUser }){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
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
            })
          } else {
            res.json().then(errors => {
              console.error(errors)
            })
          }
        })
    }

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
}


export default LogIn;