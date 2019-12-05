import React from 'react';
import './GameBoard.css';

const ROW_SIZE = 300;
const WIDTH = 800;
const HEIGHT = 600;

class GameBoard extends React.Component {  
  render() {    
    return (      
      <div>        
        <div className="Board"          
          style={{ width: WIDTH, height: HEIGHT }}>        
        </div>
        <p>This is a test</p>
      </div>    
      );  
    }}

    export default GameBoard;