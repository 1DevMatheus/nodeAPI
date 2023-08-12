const mongoose = require("mongoose");

const { Schema } = mongoose;

const feedbackSchema = new Schema({
  userName: {
    type: String,
    require: true,
  },
  target: {
    type: String,
    require: false,
  },
  message: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = {
  Feedback,
  feedbackSchema,
};
