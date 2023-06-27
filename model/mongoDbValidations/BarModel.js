import mongoose from "mongoose";

import { validateCapacity, capacityError, nameError, addressError, passwordError , mailError, validateMail} from './validations.js';


const barSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, nameError]
  },
  mail: {
    type: String,
    required: true,
    validate: {
      validator: validateMail,
      message: mailError
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [3, passwordError]
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    minlength: [3, addressError]
  },
  capacity: {
    type: Number,
    required: true,
    validate: {
      validator: validateCapacity,
      message: capacityError
    }
  },
  userType: {
    type: String,
    default: "bar",
  },
  eventId: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

export default mongoose.model("Bar", barSchema);
