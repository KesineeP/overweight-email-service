const express = require("express");
const router = express.Router();
const pool = require("../db");

router.delete("/:email", async (res, req) => {
  const { email } = res.params;
  console.log(email);
  try {
    await pool.query(
      `DELETE
            FROM "email-service".email_list
            WHERE email = '${email}'
      `
    );
    res.send(`${email} Succesfully Unsubscribed`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
