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

    const teacher = currentUser.each( u => {
      return(
        <div key={u.id}>
          <p>{u.username}</p>
        </div>
      )
    }
    )
    return (
      <div >
         <span>Logged in as {teacher} <button onClick={handleLogout}>Logout</button></span>
        <nav>
        </nav>
      </div>
    );

}

export default AuthenticatedHome;



