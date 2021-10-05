const express = require("express");
const router = express.Router();
const pool = require("../db");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", async (req, res, next) => {
  const { email } = req.body;
  const msg = {
    to: `${email}`,
    from: "support@overweightfinancials.com",
    templateId: "d-9c00c9a417a749d29c5ae0ab3d393e54", //Generate template Id from Dynamic Templates on Sendgrid website
    dynamic_template_data: {
      user: {
        email: `${email}`,
      },
    },
  };
  try {
    await pool.query(
      `INSERT INTO "email-service".email_list (email) VALUES ($1)`,
      [email]
    );
    sgMail
      .send(msg)
      .then((res) => console.log(`Email sent to.. ${email}`))
      .catch((error) => error.message);

    res.status(200).send({
      message: `Thank you! ${req.body.email} has been signed up for notifications`,
    });
  } catch (err) {
    if (err.code === "23505") {
      res
        .status(409)
        .send({ message: `${req.body.email} is already signed up` });
    } else {
      res.send({ message: "Something went wrong! Try again later." });
    }
  }
});

module.exports = router;
