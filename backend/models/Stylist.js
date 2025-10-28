const mongoose = require("mongoose");
const { Schema } = mongoose;

const stylistSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: Number,
  },

  address: {
    type: String,
  },

  city: {
    type: String,
  },

  services: [
    {
      service: {
        type: String,
      },
      price: {
        type: Number,
      },
      estimatedTime: {
        type: Number,
      },
    },
  ],

  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],

  salon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Salon",
  },
});

module.exports = mongoose.model("Stylist", stylistSchema);
