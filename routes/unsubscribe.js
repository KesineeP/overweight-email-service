const express = require("express");
const router = express.Router();
const pool = require("../db");

router.delete("/:email", async (res, req, next) => {
  const { email } = res.params;

  try {
    const unsubscribe = await pool.query(
      `DELETE
            FROM "email-service".email_list
            WHERE email = '${email}'
      `
    );
    //if rowCount === 0
    //send back message say "${email} already unsubscribe"
    //else send back message say "${email} Successfully Unsubscribe"
    if (unsubscribe.rowCount === 0) {
      console.log(`${email} Already Unsubscribed`);
    } else {
      console.log(`${email} Successfully Unsubscribed`);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
