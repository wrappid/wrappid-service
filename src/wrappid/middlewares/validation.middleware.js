const validation = (schema) => async (req, res, next) => {
  try {
    // console.log(req.body)
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



const postAppointment = {
    body: yup
      .object({
        date: yup.string().required(),
        startTime: yup.string().required(),
        endTime: yup.string().required(),
        clinicId: yup.mixed(),
        patientId: yup.mixed().required(),
        doctorId: yup.mixed().required(),
        isForce: yup.bool(),
      })
      .noUnknown()
      .strict(),
    query: yup.object({}).noUnknown().strict(),
  };



module.exports = validation;
