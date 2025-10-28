const Salon = require("../models/Salon");
const { createSalon } = require("../services/salon.service");

module.exports.registerSalon = async (req, res) => {
  try {
    const { name, type, address, phone } = req.body;

    if (!name || !type || !address || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const salonNumber = Math.floor(10000000 + Math.random() * 90000000);

    const isSalonAlreadyExists = await Salon.findOne({ phone });
    if (isSalonAlreadyExists) {
      return res.status(400).json({ message: "Salon already exists" });
    }

    const salon = await createSalon({
      name,
      type,
      address,
      phone,
      salonNumber,
    });

    return res
      .status(200)
      .json({ message: "Salon registered successfully", salon });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to register salon" });
  }
};

module.exports.listSalons = async (req, res) => {
  try {
    const salons = await Salon.find({});

    res.status(200).json({ salons });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to list salons" });
  }
};
