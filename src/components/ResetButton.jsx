import React from "react";
import "../styles//ResetButton.css";

const ResetButton = ({ onReset }) => {
  return <button className="reset-button" onClick={onReset}>Reset Game</button>;
};

export default ResetButton;
