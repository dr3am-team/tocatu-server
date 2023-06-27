import mongoose from "mongoose";

import { nameError, passwordError } from "./validations.js";


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, nameError]
  },
  password: {
    type: String,
    required: true,
    minlength: [3, passwordError]
  },
  mail: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    default: "viewer"
  },
  eventsSubscribed: {
    type: [mongoose.Schema.Types.ObjectId]
  }
});

export default mongoose.model("User", userSchema);
