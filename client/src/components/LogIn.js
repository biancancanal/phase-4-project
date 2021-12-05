import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';

function LogIn({setCurrentUser}) {
    const history = useHistory()
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
              console.log(user)
              history.push('/me')
            })
          } else {
            res.json().then(errors => {
              console.error(errors)
            })
          }
        })
    }
    
  return (
    (
        <div className="authForm">
    
        <form onSubmit={handleSubmit}>
          <h4>Teacher Log In</h4>
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
          <p><button type="submit">Submit Log In</button></p>
          <p></p>
          <p><button><Link to="/signup">Sign Up</Link></button></p>
        </form>
      </div>   
      )
  )
  
}

export default LogIn;