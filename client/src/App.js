import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './components/Home';
import SignUp from './components/SignUp';
import AuthenticatedHome from './components/AuthenticatedHome';



function App() {
const [currentUser, setCurrentUser] = useState(null);
const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])
 
  return (
    <div className="App">
    <Router>
      {/* if currentUser
        AuthorizedApp setCurrentUser={setCurrentUser}
      else 
        UnauthorizedApp */}
      

        <Switch>
          <Route exact path="/" component={() => <Home setCurrentUser={setCurrentUser} />} />
          <Route exact path="/signup">
            <SignUp setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path="/me" component={() => <AuthenticatedHome setCurrentUser={setCurrentUser}/>}></Route>
          {/* <Route exact path="/lessons" component={Lessons}/> */}
          {/* <Route exact path="/teachers/:id/lesson" component={Lesson} /> */}
        </Switch>
      </Router>
      </div>
  )}

      export default App;