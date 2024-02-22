const express = require('express');
const {
  getExercises,
  createExercise,
  getExerciseById,
  patchExerciseById,
} = require('./controllers/exerciseController');
const app = express();

app.use(express.json());

app.get('/exercise', getExercises);
app.post('/exercise', createExercise);

app.get('/exercise/:id', getExerciseById);
app.patch('/exercise/:id', patchExerciseById);

module.exports = app;
