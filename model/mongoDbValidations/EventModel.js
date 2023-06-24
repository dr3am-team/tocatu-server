import mongoose from "mongoose";

import { validateCapacity, capacityError, nameError, addressError, validatePrice, priceError } from './validations.js';


const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [3, nameError]
  },
  date: {
    type: Date,
    required: true,
  },
  flyer: {
    type: String,
  },
  capacity: {
    type: Number,
    required: true,
    validate: {
      validator: validateCapacity,
      message: capacityError
    }
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    minlength: [3, addressError]
  },
  barName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: validatePrice,
      message: priceError
    }
  },
  bandId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  viewersId: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

export default mongoose.model("Event", eventSchema);
