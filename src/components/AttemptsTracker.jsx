import React from "react";
import "../styles//AttemptsTracker.css";

const AttemptsTracker = ({ attempts }) => {
  return <div className="attempts-tracker">Attempts: {attempts}</div>;
};

export default AttemptsTracker;
