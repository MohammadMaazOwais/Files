import mongoose from "mongoose";

const Schema = mongoose.Schema;

let LogSchema = new Schema(
  {
    user_android_id: { type: String, required: true },
    user_device_model: { type: String, required: true },
    user_logs: { type: [String], required: true },
  },
  { collection: "log" }
);

export default mongoose.model("Log", LogSchema); // this
