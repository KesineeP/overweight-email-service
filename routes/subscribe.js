const express = require("express");
const router = express.Router();
const sendWelcomeEmail = require("../service/sendGridService");
const addUserEmailToEmailList = require("../service/databaseService");
router.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    await addUserEmailToEmailList(email);
    sendWelcomeEmail(req, res); //send welcome email to user
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
