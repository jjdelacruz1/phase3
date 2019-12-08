import React, { Component } from 'react';
import './GameBoard.css';

class GameBoard extends Component {  

  constructor(props) {
    super(props)
    this.state = {
      secretCode: this.createSecretCode(),
      colorPredictions: [],
      circle1: 0,
      circle2: 0,
      circle3: 0,
      circle4: 0
    }
  }

  createSecretCode = () => {
    const makeARandomNumber = () => {
      return Math.floor(Math.random() * 6) + 1;
    };
    let randomArr = Array(4).fill(0).map(makeARandomNumber);
    console.log("secret is: ", randomArr)
    return randomArr
  }

  cycleColor = (circle, key) => {
    let nextCircleIndex = circle + 1
    if (nextCircleIndex === 7) {
      nextCircleIndex = 0
    }
    this.setState({
      [key]: nextCircleIndex
    })
  }

  collectGuess = () => {
    let guess = [this.state.circle1, this.state.circle2, this.state.circle3, this.state.circle4]
    if (guess.includes(0)) {
      alert("This isn't working")
    }
  }

  
  render() {
    const colorOptions = [null, 'red', 'cyan', 'green', 'orange', 'magenta', 'blue'] 
    let key = ""
    return (     
      <div className="row container">  
        <div className="border">  
            <span type="button" className="dot"
            style={
              {
                backgroundColor: colorOptions[this.state.circle1]
              }
            } onClick={() => this.cycleColor(this.state.circle1, key="circle1")}></span>        
           <span type="button" className="dot"
            style={
              {
                backgroundColor: colorOptions[this.state.circle2]
              }
            } onClick={() => this.cycleColor(this.state.circle2, key="circle2")}></span> 
          <span type="button" className="dot"
            style={
              {
                backgroundColor: colorOptions[this.state.circle3]
              }
            } onClick={() => this.cycleColor(this.state.circle3, key="circle3")}></span> 
          <span type="button" className="dot"
            style={
              {
                backgroundColor: colorOptions[this.state.circle4]
              }
            } onClick={() => this.cycleColor(this.state.circle4, key="circle4")}></span>  
        </div>    
        <div className="border">
          <span className="dot"></span>         
          <span className="dot"></span> 
          <span className="dot"></span> 
          <span className="dot"></span> 
        </div>
        <button type="button" onClick={() => this.collectGuess(this.state)}>Check!</button>
      </div>
      );  
    }}

    export default GameBoard;