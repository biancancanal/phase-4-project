import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import SignUp from './components/SignUp';



function App() {
  return (
    <div className="App">
    <Router>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          {/* <Route exact path="/lessons" component={Lessons}/> */}
          {/* <Route exact path="/teachers/:id/lesson" component={Lesson} /> */}
        </Switch>
      </Router>
      </div>
  )}

      export default App;