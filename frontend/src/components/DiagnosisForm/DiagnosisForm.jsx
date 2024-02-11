import React, { useState } from 'react';
import './DiagnosisForm.css';

const DiagnosisForm = () => {
  const [symptoms, setSymptoms] = useState('');
  const [analyses, setAnalyses] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно вызвать функцию отправки данных на бэкенд
    // Например, вызвать функцию sendFormData(symptoms, analyses);
  };

  return (
    <div className="diagnosis-form-container">
      <h2 className="form-title">Medical Diagnosis Predictor</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Symptoms:
          <input
            className="form-input"
            type="text"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Analyses:
          <input
            className="form-input"
            type="text"
            value={analyses}
            onChange={(e) => setAnalyses(e.target.value)}
          />
        </label>
        <br />
        <button className="form-button" type="submit">Predict Diagnosis</button>
      </form>
    </div>
  );
};

export default DiagnosisForm;
