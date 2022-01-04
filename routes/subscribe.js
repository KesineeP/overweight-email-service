const express = require("express");
const router = express.Router();
const sendEmailTemplate = require("../service/sendGridService");
const databaseService = require("../service/databaseService");
router.post("/", async (req, res) => {
  const { email } = req.body;
  const welcomeEmailTemplateId = "d-9c00c9a417a749d29c5ae0ab3d393e54";

  try {
    await databaseService.addUserEmailToEmailList(email);
    sendEmailTemplate(email, welcomeEmailTemplateId);
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
