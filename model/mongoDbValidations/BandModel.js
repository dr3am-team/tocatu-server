import mongoose from "mongoose";

import { nameError, passwordError } from './validations.js';


const bandSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, nameError]
  },
  mail: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: [3, passwordError]
  },
  style: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    minlength: [3, nameError]
  },
  userType: {
    type: String,
    default: "band"
  },
  eventsSubscribed: {
    type: [mongoose.Schema.Types.ObjectId]
  }
});

export default mongoose.model("Band", bandSchema);
