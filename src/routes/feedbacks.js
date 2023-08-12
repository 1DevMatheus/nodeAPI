const router = require("express").Router();

const feedbackController = require("../controllers/feedbackController");

router
  .route("/feedbacks")
  .post((req, res) => feedbackController.create(req, res));

router
  .route("/feedbacks")
  .get((req, res) => feedbackController.getAll(req, res));

router
  .route("/feedbacks/delete/:id")
  .delete((req, res) => feedbackController.delete(req, res));

router
  .route("/feedbacks/update/:id")
  .put((req, res) => feedbackController.update(req, res));

module.exports = router;
