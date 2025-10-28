const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingModel = new Schema({
  stylist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stylist",
    },
  ],

  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  timeBookedFor: {
    type: Date,
  },

  demandedServices: [
    {
      type: String,
    },
  ],

  status: {
    type: String,
    default: "pending",
    enum: ["pending", "accepted", "rejected", "completed"],
  },
});

module.exports = mongoose.model("Booking", bookingModel);
