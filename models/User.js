const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  interests: [{ interest: { type: String } }],
  SocialMediaLinks: {
    facebook: String,
    Instagram: String,
    Linkedin: String,
    Github: String,
    Website: String,
    Twitter: String,
  },
  Description: {
    type: String,
  },
  PersonalInformation: {
    HighestEducation: String,
    CurrentlyStudying: String,
  },
});
module.exports = mongoose.model("user", UserSchema);
