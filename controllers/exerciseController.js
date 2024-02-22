const { v4: uuidv4 } = require('uuid');

const exercises = [
  {
    text: 'test1',
  },
  {
    text: 'test1',
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

module.exports.getExerciseById = (req, res) => {
  const {
    params: { id },
  } = req;

  const exercise = exercises.find(exercise => exercise.id === id);
  if (exercise === undefined) res.status(404).send('exerciseNotFound');
  res.status(200).send(exercise);
};

module.exports.patchExerciseById = (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  const exerciseIndex = exercises.findIndex(exercise => exercise.id === id);
  if (exerciseIndex === -1) res.status(404).send('exerciseNotFound');

  const newExercise = { ...exercises[exerciseIndex], ...body };
  res.status(200).send(newExercise);
};

