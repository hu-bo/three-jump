import React from 'react'
import App from '../App.js'
import {
  Router,
  Route
} from 'react-router'
const About = () =>{
  return (
    <div>
      <p>
        About
      </p>
    </div>
  )
}
const routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path="/About" component={About} />
    </Route>
  </Router>
);

export default routes
