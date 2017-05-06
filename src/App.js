import React, { Component } from 'react';
import './App.css';
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';
import AppRouter from '@/router';
// import Home from '@/views/home/'
class App extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <AppRouter></AppRouter>
        {/*<Home></Home>*/}
      </LocaleProvider>
    );
  }
}

export default App;
