import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard'

class App extends Component {
  render () {
    return (
      <div className="Title">
        <h1>Mastermind Easy Game</h1>
        <GameBoard />
      </div>
    )
  }
}

export default App;
