import React, { Component} from 'react';
import './GameBoard.css';
import GameRow from './GameRow';

class GameBoard extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      secretCode: this.createSecretCode(),
      answerKey: ["white", "white", "white", "white"],
      rowState: []
    }
    this.handleCheck = this.handleCheck.bind(this)
  }

  
  createSecretCode() {
    const makeARandomNumber = () => {
      return Math.floor(Math.random() * 6) + 1;
    };
    let randomArr = Array(4).fill(0).map(makeARandomNumber);
    console.log("secret is: ", randomArr)
    return randomArr
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
      console.log("BEFORE: coming from compare: ", this.state.rowState)
      this.setState({answerKey: decoder})
    }

    handleCheck(array) {
      this.setState({
        ...this.state,
        rowState: array
      })
      console.log("coming from handlecheck", array)
    }
    
  render() {
    return (     
      <div className="container d-flex justify-content-center">  
        <div className="d-flex">
          <GameRow handleCheck={this.handleCheck} />
          <div className="border">
            <span className="dot" style={{backgroundColor: this.state.answerKey[0]}}></span>         
            <span className="dot" style={{backgroundColor: this.state.answerKey[1]}}></span> 
            <span className="dot" style={{backgroundColor: this.state.answerKey[2]}}></span> 
            <span className="dot" style={{backgroundColor: this.state.answerKey[3]}}></span> 
          </div>
          <button type="button" onClick={() => {this.compareGuessToSecret(this.state.secretCode, this.state.rowState)}}>Check!</button>
        </div>
      </div>
      );  
    }
  }
    export default GameBoard;