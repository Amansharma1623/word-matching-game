import React from "react";
import "../styles/ConfigPanel.css";

const ConfigPanel = ({ config, onConfigChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onConfigChange(name, parseInt(value, 10));
  };

  return (
    <div className="config-panel">
      <label>
        Group Size:
        <input
          type="number"
          name="groupSize"
          value={config.groupSize}
          onChange={handleChange}
          min="2"
        />
      </label>
      <label>
        Item Count:
        <input
          type="number"
          name="itemCount"
          value={config.itemCount}
          onChange={handleChange}
          min="4"
        />
      </label>
      <label>
        Columns:
        <input
          type="number"
          name="columns"
          value={config.columns}
          onChange={handleChange}
          min="2"
        />
      </label>
    </div>
  );
};

export default ConfigPanel;
