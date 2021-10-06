const express = require("express");
const router = express.Router();
const pool = require("../db");

router.delete("/", async (res, req) => {
  try {
    await pool.query(
      `DELETE
            FROM "email-service".email_list
            WHERE email = '${email}'
      `
    );
    console.log("response", res.body);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
