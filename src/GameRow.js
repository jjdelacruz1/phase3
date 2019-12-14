import React, { Component } from 'react';
import './GameBoard.css';

class GameRow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      circle1: 0,
      circle2: 0,
      circle3: 0,
      circle4: 0
    }
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
  


  render() {
    const circlesArray = [
      {state: this.state.circle1, key: "circle1"}, 
      {state: this.state.circle2, key: "circle2"}, 
      {state: this.state.circle3, key: "circle3"}, 
      {state: this.state.circle4, key: "circle4"}
    ]

    const colorOptions = [null, 'red', 'cyan', 'green', 'orange', 'magenta', 'blue'] 
    let key = ""
    return (
      <div className="border">  
        {circlesArray.map(circle => {
          return (
            <span type="button" className="dot"
            style={
              {
                backgroundColor: colorOptions[circle.state]
              }
            } onClick={() => {
              this.cycleColor(circle.state, key=circle.key);
              this.props.handleCheck([
                this.state.circle1, 
                this.state.circle2, 
                this.state.circle3, 
                this.state.circle4
              ])
            }}></span>  
          )
        })}        
        </div>    
    )
  }

}

export default GameRow