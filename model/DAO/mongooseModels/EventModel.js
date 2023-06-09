import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date, //Revisar
    required: true
  },
  flyer: {
    type: String
  },
  capacity: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  barName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

export default mongoose.model("Event", eventSchema);
