import React, { Component } from 'react'
import Rotuer from './router'
import { Link } from 'react-router'
import { Button } from 'antd'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
           <Button type="primary">Button</Button>
        </p>
        <div>
            <ul>
                <li>
                    <Link></Link>
                </li>
            </ul>
        </div>
          <Rotuer/>
      </div>
    );
  }
}

export default App;
