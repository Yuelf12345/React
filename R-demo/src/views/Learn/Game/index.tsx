import Style from "./index.module.less";
import { useState } from "react";
const Square = ({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) => {
  return (
    <button className={Style["square"]} onClick={onSquareClick}>
      {value}
    </button>
  );
};

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("Next player: X");
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    const winner = calculateWinner(nextSquares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    setStatus(status);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <div>
      <div className="status">{status}</div>
      {[0, 1, 2].map((i) => {
        return (
          <div className={Style["board-row"]} key={i}>
            {[0, 1, 2].map((j) => {
              return (
                <Square
                  value={squares[i * 3 + j]}
                  onSquareClick={() => handleClick(i * 3 + j)}
                  key={j}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Game;
