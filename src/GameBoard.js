import React, { Component } from 'react';
import './GameBoard.css';

class GameBoard extends Component {  

  constructor(props) {
    super(props)
    this.state = {
      secretCode: this.createSecretCode(),
      answerKey: ["white", "white", "white", "white"],
      circle1: 0,
      circle2: 0,
      circle3: 0,
      circle4: 0
    }
    this.addAnotherRow = this.addAnotherRow.bind(this)
  }

  addAnotherRow() {
    this.setState({
      secretCode: this.state.secretCode,
      answerKey: ["white", "white", "white", "white"],
      circle1: 0,
      circle2: 0,
      circle3: 0,
      circle4: 0
    })
  }

  createSecretCode() {
    const makeARandomNumber = () => {
      return Math.floor(Math.random() * 6) + 1;
    };
    let randomArr = Array(4).fill(0).map(makeARandomNumber);
    console.log("secret is: ", randomArr)
    return randomArr
  }

  cycleColor(circle, key) {
    let nextCircleIndex = circle + 1
    if (nextCircleIndex === 7) {
      nextCircleIndex = 0
    }
    this.setState({
      [key]: nextCircleIndex
    })
  }

  collectGuess() {
    let guess = [this.state.circle1, this.state.circle2, this.state.circle3, this.state.circle4]
    if (guess.includes(0)) {
      alert("White is not a valid choice!")
    }
  }

   compareGuessToSecret(arr1, arr2) {
      let decoder = []
      for(let i = 0; i < arr1.length; i++) {
          if(arr1[i] === arr2[i]) {
            decoder.push("black")
          } else {
            decoder.push("white")
          }
      }
      this.setState({answerKey: decoder})
    }
 
  render() {
    const circlesArray = [{state: this.state.circle1, key: "circle1"}, {state: this.state.circle2, key: "circle2"}, {state:this.state.circle3, key: "circle3"}, {state:this.state.circle4, key:"circle4"}]
    const colorOptions = [null, 'red', 'cyan', 'green', 'orange', 'magenta', 'blue'] 
    let key = ""
    return (     
      <div className="container d-flex justify-content-center">  
        <div className="border">  
        {circlesArray.map(circle => {
          return (
            <span type="button" className="dot"
            style={
              {
                backgroundColor: colorOptions[circle.state]
              }
            } onClick={() => this.cycleColor(circle.state, key=circle.key)}></span>  
          )
        })}        
        </div>    
        <div className="border">
          <span className="dot" style={{backgroundColor: this.state.answerKey[0]}}></span>         
          <span className="dot" style={{backgroundColor: this.state.answerKey[1]}}></span> 
          <span className="dot" style={{backgroundColor: this.state.answerKey[2]}}></span> 
          <span className="dot" style={{backgroundColor: this.state.answerKey[3]}}></span> 
        </div>
        <button type="button" onClick={() => {
          this.collectGuess(this.state); 
          this.compareGuessToSecret(this.state.secretCode, [this.state.circle1, this.state.circle2, this.state.circle3, this.state.circle4]);}}>Check!</button>
      </div>
      );  
    }
  }
    export default GameBoard;