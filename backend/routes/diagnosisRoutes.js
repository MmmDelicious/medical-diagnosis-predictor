// backend/routes/diagnosisRoutes.js
const express = require('express');
const router = express.Router();
const diagnosisController = require('../controllers/diagnosisController');

// Маршрут для обработки запроса на предсказание диагноза
router.post('/predictDiagnosis', diagnosisController.predictDiagnosis);

module.exports = router;
