import React, { Component } from 'react';
import './App.css';

class Secret extends Component {
  render () {
    // const colorOptions = [null, 'red', 'cyan', 'green', 'orange', 'magenta', 'blue']
    return (
      <div className="container">
          <h3>Secret Code</h3>
          <span className="dot">?</span>         
          <span className="dot">?</span> 
          <span className="dot">?</span> 
          <span className="dot">?</span> 
        </div>
    )
  }
}

export default Secret;