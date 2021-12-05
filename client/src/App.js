import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Home from './components/Home';
import SignUp from './components/SignUp';
import AuthenticatedHome from './components/AuthenticatedHome';
import LogIn from './components/LogIn';



function App() {
const [currentUser, setCurrentUser] = useState(null);
 
  return (
    <div className="App">
    <Router>

        <Switch>
          <Route exact path="/" component={() => <Home setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
          <Route exact path="/signup">
            <SignUp setCurrentUser={setCurrentUser} currentUser={currentUser}/>
          </Route>
          <Route exact path="/login" component={() => <LogIn setCurrentUser={setCurrentUser} currentUser={currentUser}/>}></Route>
          <Route exact path="/me" component={() => <AuthenticatedHome setCurrentUser={setCurrentUser} currentUser={currentUser} />}></Route>
        </Switch>
      </Router>
      </div>
  )}

      export default App;