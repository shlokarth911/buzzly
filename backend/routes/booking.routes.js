const express = require("express");
const {
  requestBooking,
  acceptBooking,
  rejectBooking,
  listBookingsForStylist,
  listBookingsForUser,
} = require("../controllers/booking.controller");
const { authUser, authStylist } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/request", authUser, requestBooking);
router.post("/accept/:id", authStylist, acceptBooking);
router.post("/reject/:id", authStylist, rejectBooking);

router.get("/list/stylist", authStylist, listBookingsForStylist);
router.get("/list/user", authUser, listBookingsForUser);

module.exports = router;
