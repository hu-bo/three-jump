import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// views
import {
  Home
} from '@/views/';
const AppRouter = () => (
  <Router>
    <div>
      <Home/>
      <Route path="/"  component={Home}/>
    </div>
  </Router>
)
export default AppRouter