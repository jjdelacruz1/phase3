import React, { Component } from 'react';
import './GameBoard.css';

// TODO: 
// 1. make predictions by getting info from cycleColor function and putting it into an array.

class GameBoard extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      secretCode: [],
      colorPredictions: [],
      circle1: 0,
      circle2: 0,
      circle3: 0,
      circle4: 0
    }
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
    this.state.colorPredictions.push(this.state.circle1, this.state.circle2, this.state.circle3, this.state.circle4)
    console.log("guess", this.state.colorPredictions)
  }

  render() {
    const colorOptions = [null, 'red', 'cyan', 'green', 'orange', 'magenta', 'blue']
    let key = ""
    return (      
      <div className="row container">  
        <div className="border">      
          <label type="button" className="dot"
            style={
              {
                backgroundColor: colorOptions[this.state.circle1]
              }
            } onClick={() => this.cycleColor(this.state.circle1, key="circle1")}></label>       
          <label type="button" className="dot"
            style={
              {
                backgroundColor: colorOptions[this.state.circle2]
              }
            } onClick={() => this.cycleColor(this.state.circle2, key="circle2")}></label> 
          <label type="button" className="dot"
            style={
              {
                backgroundColor: colorOptions[this.state.circle3]
              }
            } onClick={() => this.cycleColor(this.state.circle3, key="circle3")}></label> 
          <label type="button" className="dot"
            style={
              {
                backgroundColor: colorOptions[this.state.circle4]
              }
            } onClick={() => this.cycleColor(this.state.circle4, key="circle4")}></label> 
          
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