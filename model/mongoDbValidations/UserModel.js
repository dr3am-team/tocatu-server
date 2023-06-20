import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    default: "viewer",
  },
  eventsSubscribed: {
    type: [mongoose.Schema.Types.ObjectId],
  },
});

export default mongoose.model("User", userSchema);
