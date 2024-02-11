// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const diagnosisRoutes = require('./routes/diagnosisRoutes');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Подключаем маршруты для диагнозов
app.use('/api', diagnosisRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
