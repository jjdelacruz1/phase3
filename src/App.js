import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import Secret from './Secret';

class App extends Component {
  render () {
    return (
      <div className="Title">
        <h1>Mastermind Easy Game</h1>
        <Secret />
        <GameBoard />
      </div>
    )
  }
}

export default App;
