const express = require("express");
// const {Client} = require('pg')
const router = express.Router();
const pool = require('../db')

router.post("/", async (req, res) => {
  try {
    const {email} = req.body;
    const addEmail = await pool.query(`INSERT INTO "email-service".email_list (email) VALUES ($1)`, [email])
    // const emailList = await pool.query(`SELECT email
    // FROM "email-service".email_list;`);
    // await pool.end();
  }
  catch (err) {
    console.error(err.message);
  }
  res.send(`You have been registered for notification with this email address: ${req.body.email}`)
  
});


module.exports = router;
