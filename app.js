const express = require('express');
const {
  getExercises,
  createExercise,
  getExerciseById,
  patchExerciseById,
} = require('./controllers/exerciseController');

const {
  validationExercisePost
} = require('./middleware/validationMw');

const { errorHandler, validationErrorHandler } = require('./middleware/errorHandles');
const app = express();

app.use(express.json());

app.get('/exercise', getExercises);
app.post('/exercise', validationExercisePost, createExercise);
app.get('/exercise/:id', getExerciseById);
app.patch('/exercise/:id', patchExerciseById);

app.use(validationErrorHandler, errorHandler);

module.exports = app;
