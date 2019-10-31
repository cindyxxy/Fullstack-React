const mongoose = require("mongoose");
const { Schema } = mongoose; // mongoose object has property Schema - destructuring

//schemaless db allows each record have unique properties

const userSchema = new Schema({
  googleId: String
});

mongoose.model("users", userSchema);
