import React, { useState } from "react";
import "../styles/GameBoard.css";

const GameBoard = ({ words, columns, onAttempt, onMatch }) => {
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleClick = (word, index) => {
    if (selected.length < 2 && !selected.includes(index) && !matched.includes(word.text)) {
      setSelected([...selected, index]);
      onAttempt();

      if (selected.length === 1) {
        const firstWord = words[selected[0]];
        if (firstWord.group === word.group) {
          setMatched([...matched, firstWord.text, word.text]);
          onMatch();
        }
        setTimeout(() => setSelected([]), 500);
      }
    }
  };

  return (
    <div className="game-board" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {words.map((word, index) => (
        <div
          key={index}
          className={`word ${
            matched.includes(word.text)
              ? "matched"
              : selected.includes(index)
              ? "selected"
              : ""
          }`}
          onClick={() => handleClick(word, index)}
        >
          {word.text}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
