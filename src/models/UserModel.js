const mongoose = require("mongoose");
const Schema = mongoose.Schema; //schema can be used to define the structure of the document

//db.users.find()
//userSchema.find()
const userSchema = new Schema(
  {
    //fields
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
    },
    password: {
      type: String,
    },
    gender: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    hobbies: [
      {
        type: String,
      },
    ],
    //bloodgroup enum
    bloodgroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
  },
  {
    timestamps: true,
  }
);
// mongoose.model("users", userSchema) //users is the collection name
// module.exports = userSchema; //exporting the schema

module.exports = mongoose.model("users", userSchema); //users is the collection name
