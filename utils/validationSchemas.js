const yup = require('yup');

module.exports.EXERCISE_VALIDATION_SCHEMA = yup.object({
  text: yup.string().min(4).max(64).required()
});
