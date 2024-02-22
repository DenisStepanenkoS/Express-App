const { EXERCISE_VALIDATION_SCHEMA } = require('../utils/validationSchemas');

module.exports.validationExercisePost = async (req, res, next) => {
  try {
    validationExercise = await EXERCISE_VALIDATION_SCHEMA.validate(req.body);
  } catch (error) {
    return next(error);
  }
  req.body = validationExercise;
  next();
};
