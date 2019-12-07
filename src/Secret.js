import React, { Component } from 'react';
import './App.css';

class Secret extends Component {
  render () {
    return (
      <div>
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