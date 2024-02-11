import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ diagnosisList }) => {
  return (
    <div className="result-display">
      <h2>Diagnosis Results</h2>
      <ul>
        {diagnosisList.map((diagnosis, index) => (
          <li key={index}>{diagnosis}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultDisplay;
