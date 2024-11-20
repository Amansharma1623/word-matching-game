import './App.css';
import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import ConfigPanel from "./components/ConfigPanel";
import AttemptsTracker from "./components/AttemptsTracker";
import ResetButton from "./components/ResetButton";
import { generateGrid } from "./utils/generateGrid";
function App() {
  
  const [config, setConfig] = useState({ groupSize: 2, itemCount: 8, columns: 4 });
  const [words, setWords] = useState(generateGrid(config.groupSize, config.itemCount));
  const [attempts, setAttempts] = useState(0);

  const handleConfigChange = (name, value) => {
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleMatch = () => {
    // Optionally handle matched pairs
  };

  const handleReset = () => {
    setWords(generateGrid(config.groupSize, config.itemCount));
    setAttempts(0);
  };
  return (
    
    <div className="App">
      <h1 class="title">Word Connect</h1>
      <ConfigPanel config={config} onConfigChange={handleConfigChange} />
      <h3 class="_center_18i4i_26">Connect group of 2 words by clicking on related words</h3>
      <GameBoard
        words={words}
        columns={config.columns}
        onMatch={handleMatch}
        onAttempt={() => setAttempts((prev) => prev + 1)}
      />
      <AttemptsTracker attempts={attempts} />
      <ResetButton onReset={handleReset} />
    </div>
  );
}

export default App;
