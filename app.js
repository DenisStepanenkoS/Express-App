const express = require('express');
const {
  getExercises,
  createExercise,
  getExerciseById,
  patchExerciseById,
  deleteExerciseById,
} = require('./controllers/exerciseController');
const app = express();

app.use(express.json());

app.get('/exercise', getExercises);
app.post('/exercise', createExercise);

app.get('/exercise:id', getExerciseById);
app.patch('/exercise:id', patchExerciseById);
app.delete('/exercise:id', deleteExerciseById);

module.exports = app;
