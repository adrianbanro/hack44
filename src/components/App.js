import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';

import Header from './Header'
import { Switch, Route } from 'react-router-dom'

import TilesOpenProjects from './TilesOpenProjects'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

      <Header />

      <div className="ph3 pv1 background-gray">
        <Switch>
  <Route exact path="/openProjects" component={TilesOpenProjects} />
        </Switch>
      </div>

      </div>
    );
  }
}

export default App;
