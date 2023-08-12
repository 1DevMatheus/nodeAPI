const { Feedback: feedbackModel } = require("../models/feedbackModel");

const feedbackController = {
  create: async (req, res) => {
    try {
      const feedback = {
        userName: req.body.userName,
        target: req.body.target,
        message: req.body.message,
      };

      const response = await feedbackModel.create(feedback);
      res.status(201).json({ response, msg: "feedback successfully added!" });
    } catch (error) {
      console.log(`error: ${error}`);
    }
  },
  getAll: async (req, res) => {
    try {
      const feedbacks = await feedbackModel.find();
      res.json(feedbacks);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const feedbacks = await feedbackModel.findById(id);

      if (!feedbacks) {
        res.status(404).json({ msg: "Object not found" });
        return;
      }

      const deleteFeedback = await feedbackModel.findByIdAndDelete(id);

      res.status(200).json({ deleteFeedback, msg: "Object succsess deleted" });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  },
  update: async (req, res) => {
    const id = req.params.id;

    const feedback = {
      userName: req.body.userName,
      target: req.body.target,
      message: req.body.message,
    };

    const updatedFeedback = await feedbackModel.findByIdAndUpdate(id, feedback);

    if (!updatedFeedback) {
      res.status(404).json({ msg: "Object not found" });
      return;
    }

    res.status(202).json({ feedback, msg: "Object seccsess updated" });
  },
};

module.exports = feedbackController;
