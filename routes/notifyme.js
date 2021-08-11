const express = require("express");
const router = express.Router();
router.get('/', (req,res) => {
  res.send("hi post");
  // res.sendStatus(200)
  res.end()
})
router.post("/", (req, res) => {
  // console.log("Got body: ", req.body);
  const {email} = req.body;
  res.send({ email: email });
});

module.exports = router;
