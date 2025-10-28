const express = require("express");
const {
  startQueue,
  stopQueue,
  getQueue,
} = require("../controllers/queue.controller");
const { authStylist } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/start", authStylist, startQueue);
router.post("/stop", authStylist, stopQueue);
router.get("/get", authStylist, getQueue);

module.exports = router;
