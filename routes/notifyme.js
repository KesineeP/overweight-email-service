const express = require("express");
// const {Client} = require('pg')
const router = express.Router();
const pool = require('../db')

router.post("/", async (req, res) => {
  try {
    const {email} = req.body;
    await pool.query(`INSERT INTO "email-service".email_list (email) VALUES ($1)`, [email])
    
  }
  catch (err) {
    console.error(err.message);
  }
  res.send(`You have been registered for notification with this email address: ${req.body.email}`)
  
});


module.exports = router;
