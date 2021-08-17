const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
  const {email} = req.body;
  res.send({ email: process.env.PG_USER });

  // res.redirect('/');
  // next()
});
router.get('/', (req,res) => {
  res.send("We will send you an email when the app is launch");
})
module.exports = router;
