const nodemailer = require("nodemailer");
const config = require("../../config/config.json");
const {
  validateEmail,
} = require("../../module/communication/communication.validator");
const env = process.env.NODE_ENV || "development";

var transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: config[env].mailId,
    pass: config[env].mailPassword,
  },
});

const sentMail = async (mailOptions) => {
  mailOptions = {
    ...mailOptions,
    from: `${config[env].mailFrom} <${config[env].mailId}>`,
  };
  try {
    if (validateEmail(mailOptions.to)) {
      console.log("mailOptions", mailOptions);
      var response = await transporter.sendMail(mailOptions);
      console.log("Email sent: ");
      console.log(response);
      return { status: 200, message: "Mail sent" };
    } else {
      console.error("Invalid email");
      return { status: 500, message: "Invalid email" };
    }
  } catch (error) {
    if (error) {
      console.error(error);
      return { status: 500, message: "Error!!!" };
    }
  }
};

module.exports = {
  sentMail,
};
