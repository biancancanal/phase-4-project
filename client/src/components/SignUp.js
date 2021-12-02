import React, { useState } from 'react';
import { render } from 'react-dom';
import { Link, useHistory } from 'react-router-dom';


function SignUp ({ setCurrentUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault()
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation
        })
      })
        .then(res => {
          if (res.ok) {
            res.json().then(user => {
              setCurrentUser(user)
              // history.push('/')
            })
          } else {
            setCurrentUser({ username: username})
            // history.push('/')
            res.json().then(errors => {
              console.error(errors)
            })
          }
        })
    }
    return ( 
        <div className="authForm">

        <form onSubmit={handleSubmit}>
          <h4>Sign Up</h4>
          <p>
          <label 
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
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
             <p>
          <label 
            htmlFor="password_confirmation"
          >
            Password Confirmation
          </label>
          <input
            type="password"
            name="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
          </p>
          <p><button type="submit">Sign Up</button></p>
        </form>
      </div>   
    )
}

export default SignUp;