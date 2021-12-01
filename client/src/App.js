import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LogIn from './LogIn';
import Home from './pages/Home';
import Lessons from './pages/Lessons';



function App() {
  return (
    <div className="App">
    <Router>

        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/login" component={LogIn} />
          {/* <Route exact path="/teachers/:id" component={Teacher} /> */}
          {/* <Route exact path="/lessons" component={Lessons}/> */}
          {/* <Route exact path="/teachers/:id/lesson" component={Lesson} /> */}
        </Switch>
      </Router>
      </div>
  )}

      export default App;