const { v4: uuidv4 } = require('uuid');
const createError = require('http-errors');
const exercises = [
  {
    text: 'test1',
    id: '1',
  },
  {
    text: 'test1',
    id: '2',
  },
];

module.exports.getExercises = (req, res) => {
  res.status(200).send(exercises);
};

module.exports.createExercise = (req, res) => {
  const { body } = req;

  const createdExercise = { ...body, id: uuidv4() };
  exercises.push(createdExercise);

  res.status(201).send(createdExercise);
};

module.exports.getExerciseById = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const exercise = exercises.find(exercise => exercise.id === id);
  if (exercise === undefined) return next(createError(404, 'exerciseNotFound'));
  res.status(200).send(exercise);
};

module.exports.patchExerciseById = (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  const exerciseIndex = exercises.findIndex(exercise => exercise.id === id);

  if (exerciseIndex === -1) return next(createError(404, 'exerciseNotFound'));

  const newExercise = { ...exercises[exerciseIndex], ...body };
  exercises[exerciseIndex] = newExercise;
  res.status(200).send(newExercise);
};
