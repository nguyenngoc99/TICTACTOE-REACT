import React, {useState} from "react";
import Square from "./Square";

const Board = () =>{

    const [square, setSquare] = useState(Array(9).fill(null));
    const [X, setX] = useState(true);
    const [player, setPlayer] = useState("O");
    //const [result, setResult] = useState({ winner: "none", state: "none" });

    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ];



//////////////////
    const winner = calculateWinner(square);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    }else {
        status = 'Player Turn: ' + (X ? 'X' : 'O');
    } 
    


    const renderSquare = (i) => {
        return (
            <Square value = {square[i]}
                    onClick = {() => handleClick(i)}
            />
        )
    }

    const handleClick = (i) => {
        const squares = square.slice();

        if (squares[i] === null) {
            squares[i] = X ? 'X' : 'O';
            setSquare(squares);
            setX(!X);
        }else {
            alert("you can't do it" );
        }
    }

    function calculateWinner (square) {
        for (let i = 0; i < lines.length; i ++ ){
            const [a, b, c] = lines[i];
            if (square[a] && square[a] === square[b] && square[a] === square[c] ){
                return square[a];
            }
        }
        return null;
    }

    const restSetGame = () =>{
        setSquare(Array(9).fill(null));
        setPlayer("O");
        
    }

    return (
        <div className="board">
            <div className="board-item">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)} 
            </div>

            <div className="board-item">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-item">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            <div> {status}</div>
            <button type = "reset" className = "btn" onClick = {()=> restSetGame()} >Reset</button>
      
        </div>
    )
}

export default Board;