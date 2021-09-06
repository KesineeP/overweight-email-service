const express = require("express");
const router = express.Router();
const pool = require("../db");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//TO DO: check if email has been register first
//if yes then send back "This ${email} has been registerd"

router.post("/", (req, res, next) => {
  const { email } = req.body;
  const msg = {
    to: `${email}`,
    from: "support@overweightfinancials.com",
    subject: "Overweight Financials : Register for  notification",
    text: "Welcome To Overweight Financials",
    html: "<h1>Welcome To Overweight Financials</h1>",
  };
  try {
    sgMail
      .send(msg)
      .then((res) => console.log(`Email sent to.. ${email}`))
      .catch((error) => error.message);
    pool.query(`INSERT INTO "email-service".email_list (email) VALUES ($1)`, [
      email,
    ]);
    res.send(
      `You have been registered for notification with this email address: ${req.body.email}`
    );
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
