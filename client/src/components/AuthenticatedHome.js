import React, { useState, useEffect} from 'react';
import { render } from 'react-dom';
import { Switch, Route, NavLink, useHistory } from 'react-router-dom'

function AuthenticatedHome ({ currentUser, setCurrentUser }) {
    const history = useHistory()
  
    const handleLogout = () => {
      fetch(`/logout`, {
        method: 'DELETE',
        credentials: 'include'
      })
        .then(res => {
          if (res.ok) {
            setCurrentUser(null)
            history.push('/')
          }
        })
    }
    return (
      <div >
        <nav>
          <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
        </nav>
      </div>
    );

}

export default AuthenticatedHome;



