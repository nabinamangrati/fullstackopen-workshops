const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // this ensures the uniqueness of username
  },
  name: String,
  passwordHash: String,
  note: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
});
console.log("this is schema");
// console.log(userSchema, "username form schema");
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);
