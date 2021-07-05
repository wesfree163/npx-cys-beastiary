
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import roboto from './imagery/roboto.jpg';
import React, { Component } from 'react';
import Special from './components/Special'
import './App.css';

function App() {
  return (
    <div className="App" className="App-header">
      <Router>
        <Switch>
          <Route path="/Special" component={Special} exact/>
        </Switch>
      </Router>
      <header>
        <a href="/"><img src={roboto}/></a>
        
        
      </header>
      <h1>Cyber Beastiary</h1>
      <h2>A collection of dangers on the World Wide Web</h2>
      <ul>
        <li>Client-Side Vulnerabilities</li>
        <li>Server-Side Vulnerabilities</li>
        <li><a href="/Special">Special Cases</a></li>
      </ul>
    </div>
  );
}

export default App;
