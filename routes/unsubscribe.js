const express = require("express");
const router = express.Router();
const pool = require("../db");

router.delete("/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const unsubscribe = await pool.query(
      `DELETE
            FROM "email-service".email_list
            WHERE email = '${email}'
      `
    );
    if (unsubscribe.rowCount === 0) {
      res.send({ message: `${email} Already Unsubscribed` });
    } else {
      res.send({ message: `${email} Successfully Unsubscribed` });
    }
  } catch (err) {
    res.send({ message: "Something Went Wrong!" });
  }
});

module.exports = router;
