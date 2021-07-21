const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

require("dotenv").config();

// Serve all the files in '/dist' directory
app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.json());

const sendEmail = require("./helpers/sendEmailFromContactForm");

// Access the parse results as request.body
app.post("/sendContactMessage", function (request, response) {
  let formMessage = request.body.formData;
  try {
    response = "Request received";
    sendEmail(formMessage);
  } catch (error) {
    console.log(`Send contact message had an error:  ${error}`);
  }
});

app.listen(process.env.PORT || 3000, function () {
  console.log("YourTrueNature backend app listening on port 3000!");
});
