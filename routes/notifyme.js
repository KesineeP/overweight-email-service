const express = require("express");
// const {Client} = require('pg')
const router = express.Router();
const pool = require('../db')

router.post("/", async (req, res) => {
  try {
    const {email} = req.body;
    // console.log(email);
    const addEmail = await pool.query(`INSERT INTO "email-service".email_list (email) VALUES ($1)`, [email])
    const emailList = await pool.query(`SELECT email
    FROM "email-service".email_list;`);
    // await pool.end();
    console.log(addEmail);
    console.log(emailList.rows);
  }
  catch (err) {
    console.error(err.message);
  }
  res.sendStatus(200);
  
});

router.get('/', (req,res) => {
  res.send("We will send you an email when the app is launch");
})
module.exports = router;
