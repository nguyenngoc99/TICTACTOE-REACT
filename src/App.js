import React, {useState} from 'react';
import Board from './components/Board';
import './App.css';

function App() {

  const [startGame, setStartGame] = useState(true);

  const showStartGames = () =>{
    setStartGame(!startGame);
  }

  let start = null;

  if (startGame===true){
    start = (
      <div>
        <Board />
        </div>  
    )
  }

  return (
    <div className="App">
      <h2>TIC TAC TOE</h2>
      <button 
              type = "button" 
              className = "btn"
              onClick = {() => showStartGames()}>
              Start 
      </button>
      <div className = "boar">
      {start}
      </div>

      
      


    </div>
  );
}

export default App;
