const bookingModel = require("../models/Booking");
const Stylist = require("../models/Stylist");
const userModel = require("../models/User");
const User = require("../models/User");
const { createBooking } = require("../services/booking.service");

module.exports.requestBooking = async (req, res) => {
  try {
    const { stylist, user, timeBookedFor, demandedServices, isAccepted } =
      req.body;

    if (!stylist || !user) {
      return res
        .status(400)
        .json({ message: "Stylist OR user not found in request" });
    }

    const booking = await createBooking({
      stylist,
      user,
      timeBookedFor,
      demandedServices,
      isAccepted,
    });

    const stylistId = Array.isArray(stylist) ? stylist[0] : stylist;
    const userId = Array.isArray(user) ? user[0] : user;

    await Stylist.findByIdAndUpdate(stylistId, {
      $push: { bookings: booking._id },
    });

    await User.findByIdAndUpdate(userId, {
      $push: { bookings: booking._id },
    });

    return res.status(201).json({
      message: "Booking was created successfully",
      booking,
    });
  } catch (error) {
    return res.status(500).json({ message: "Server Error" });
  }
};

module.exports.acceptBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await bookingModel.findById(bookingId);

    const stylistId = req.stylist && req.stylist.id;

    if (!stylistId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    booking.isAccepted = true;

    await booking.save();

    res.status(200).json({ message: "Booking accepted", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to accept booking" });
  }
};

module.exports.rejectBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await bookingModel.findById(bookingId);

    const stylistId = req.stylist && req.stylist.id;
    if (!stylistId) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    if (!booking) {
      return res.status(404).json({ message: "Booking not found " });
    }

    await bookingModel.findByIdAndDelete(bookingId);

    res.status(200).json({ message: "Booking Rejected", booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to reject booking" });
  }
};

module.exports.listBookingsForStylist = async (req, res) => {
  try {
    const stylistId = req.stylist && req.stylist.id;

    const bookings = await bookingModel.find({ stylist: stylistId });

    return res.status(200).json({ bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to list bookings" });
  }
};

module.exports.listBookingsForUser = async (req, res) => {
  try {
    const userId = req.user && req.user.id;

    const bookings = await bookingModel.find({ user: userId });

    return res.status(200).json({ bookings });
  } catch (error) {
    console.log(error);
    req.status(500).json({ error: "Failed to list bookings" });
  }
};
