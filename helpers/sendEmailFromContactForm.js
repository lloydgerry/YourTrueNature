/*
* Helper function to send email from contact form on site using a gmail account with OAuth
*/
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    type: "OAuth2",
    user: process.env.GMAIL_USERNAME,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

//verify that can connect to Google account using creds
transporter.verify(function (error) {
  if (error) {
    console.log("Nodemailer verification failed: ", error);
  } else {
    console.log("Nodemailer verificaton is complete and is now ready");
  }
});

const sendEmail = (messageObject) => {
  let { name, email, message } = messageObject;

  let messageBody = `
  Message from: ${name}
  Their email is: ${email}
  Their message: ${message}
  `;

  let mailOptions = {
    from: email,
    to: "lloyd.gerry@gmail.com",
    //to: "lana@yourtruenature.ca",
    subject: `YourTrueNature Contact Form Submission from ${name}`,
    text: messageBody,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("ERROR from Nodemailer: ", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;
