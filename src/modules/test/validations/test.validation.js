const postTest = {
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