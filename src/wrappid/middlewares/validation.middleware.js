const validation = (schema) => async (req, res, next) => {
  try {
    
    if (schema.body) {
      await schema.body.validate(req.body);
    }
    if (schema.query) {
      await schema.query.validate(req.query);
    }
    if (schema.params) {
      await schema.params.validate(req.params);
    }
    console.log("Validate successfully");
    next();
  } catch (err) {
    console.log(err);
    return res.status(406).json({ message: err.errors ? err.errors[0] : err });
  }
};

module.exports = validation;
 
