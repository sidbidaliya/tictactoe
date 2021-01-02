import React, { useState } from 'react';
import BoardA from './components/Board';
import './styles/root.scss';
import { calculateWinner } from './helpers';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXNext ? 'X' : 'O'}`;

  console.log(winner);

  const handleSquareClicks = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsXNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <BoardA board={board} handleSquareClicks={handleSquareClicks} />
    </div>
  );
};

export default App;
