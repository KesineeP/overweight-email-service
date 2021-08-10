const express = require("express");
const router = express.Router();

/* GET home page. */
router.post("/", (req, res) => {
  const emailTest = req.body.email;

  res.send({ email: emailTest });
  //res.send("hi post");
});

module.exports = router;
