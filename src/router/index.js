import React from 'react'
import App from '../App.js';
import {
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
  <Route>
    <Route path="/" component={App}>
      <Route path="/About" component={About} />
    </Route>
  </Route>
);

export default routes
