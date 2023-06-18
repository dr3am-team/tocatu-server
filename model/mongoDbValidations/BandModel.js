import mongoose from "mongoose";

const bandSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  mail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    default: "band",
  },
  eventsSubscribed: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

export default mongoose.model("Band", bandSchema);
