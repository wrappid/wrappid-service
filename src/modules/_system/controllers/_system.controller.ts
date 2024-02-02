export const getVersion = async (req: any, res: any) => {
  try {
    res.status(200).json({ message: "API call Sucessfully" });
    //   let result = await patientFunction.getVersion(req, res);
    //   let { status, message, data } = result;
    //   res.status(status).json({message: message, data
    // });
  } catch (error) {
    console.error("Error :: ", error);
    res.status(500).json({ message: error.message });
  }
};
