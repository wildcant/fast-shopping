const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) return next(error);
    next();
  };
};
module.exports = { validate };
