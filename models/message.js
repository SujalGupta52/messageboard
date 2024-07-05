import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  added: {
    type: Date,
    default: Date.now,
  },
});

export default model("Message", messageSchema);
