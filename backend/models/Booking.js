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

  isAccepted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Booking", bookingModel);
