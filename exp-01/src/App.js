import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom'

import VoiceMod from './VoiceMod';
import Echo from './Echo';

class App extends Component {
  render() {
    return (
      <div className="App">
        // <ul>
        //   <li><Link to="/">Home</Link></li>
        //   <li><Link to="/voice">Voice</Link></li>
        //   <li><Link to="/echo">echo</Link></li>
        // </ul>
        <Route path="/voice" component={VoiceMod} />
        <Route path="/echo" component={Echo} />
      </div>
    );
  }
}

export default App;
