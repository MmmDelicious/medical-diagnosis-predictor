// backend/controllers/diagnosisController.js
const diagnosisService = require('../services/diagnosisService');

const predictDiagnosis = (req, res) => {
  const { symptoms } = req.body;

  // Вызываем сервис для предсказания диагноза
  const diagnosisList = diagnosisService.predictDiagnosis(symptoms);

  res.json({ diagnosisList });
};

module.exports = {
  predictDiagnosis,
};
