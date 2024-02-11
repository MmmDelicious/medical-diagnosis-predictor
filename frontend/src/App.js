import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import DiagnosisForm from './components/DiagnosisForm/DiagnosisForm';
import ResultDisplay from './components/ResultDisplay/ResultDisplay';

const App = () => {
  const mockDiagnosisList = ["Diagnosis 1", "Diagnosis 2", "Diagnosis 3"];

  return (
    <div className="app-container">
      <Header />
      <DiagnosisForm />
      <ResultDisplay diagnosisList={mockDiagnosisList} />
      {/* Другие компоненты могут быть добавлены здесь */}
    </div>
  );
};

export default App;
