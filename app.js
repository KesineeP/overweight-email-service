const express = require("express");
const app = express();
const port = 3000;
const test = require("./routes/test");
const notifyme = require("./routes/notifyme");

app.use(express.json());

app.use("/", test);
app.use("/notifyme", notifyme);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
