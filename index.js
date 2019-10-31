const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

mongoose
  .connect(keys.mongoURI)
  .then(x => {
    console.log(x);
  })
  .catch(e => {
    console.log("error", e);
  });

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
