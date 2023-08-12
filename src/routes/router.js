const router = require("express").Router();

const feedbackRouter = require("./feedbacks");

router.use("/", feedbackRouter);

module.exports = router;
