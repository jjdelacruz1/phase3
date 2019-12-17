import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import Secret from './Secret';

class App extends Component {
  render () {
    return (
      <div className="Title">
        <h1>Color Code Match Game</h1>
        <h4>Guess the random 4 color code!</h4>
        <h4>The decoder will tell you if you have the right color in the right spot.</h4>
        <h4>Black means that it is correct. White means you are incorrect.</h4>
        <h4>Good Luck!</h4>
        <GameBoard />
      </div>
    )
  }
}

export default App;
