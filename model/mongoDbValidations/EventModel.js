import { ObjectId } from "bson";
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
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
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  barName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bandId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  usersId: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

export default mongoose.model("Event", eventSchema);
