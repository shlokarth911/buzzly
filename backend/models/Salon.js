const moongoose = require("mongoose");
const { Schema } = moongoose;

const salonSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  address: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ["male", "female", "unisex"],
    required: true,
  },

  //it allows the stylists to enroll in a salon
  salonNumber: {
    type: Number,
    required: true,
    unique: true,
  },

  stylists: [
    {
      type: moongoose.Schema.Types.ObjectId,
      ref: "Stylist",
    },
  ],
});

module.exports = moongoose.model("Salon", salonSchema);
