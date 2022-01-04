const express = require("express");
const router = express.Router();
const databaseService = require("../service/databaseService");

router.delete("/:email", async (req, res) => {
  const { email } = req.params;
  console.log(email);
  try {
    const unsubscribe = await databaseService.deleteUserEmailFromEmailList(
      email
    );
    console.log(unsubscribe.rowCount);
    if (unsubscribe.rowCount === 1) {
      res.send({ message: `${email} Successfully Unsubscribed` });
    } else {
      res.send({ message: `${email} Already Unsubscribed` });
    }
  } catch (err) {
    res.send({ message: "Something Went Wrong!" });
  }
});

module.exports = router;
