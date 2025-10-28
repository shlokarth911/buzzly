const mongoose = require("mongoose");
const { Schema } = mongoose;

const queueSchema = new Schema({
  stylist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stylist",
  },

  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],

  estimatedTime: {
    type: Number,
  },
});

module.exports = mongoose.model("Queue", queueSchema);
