const Queue = require("../models/Queue");

module.exports.startQueue = async (req, res) => {
  try {
    const stylistId = req.stylist || req.stylist.id;

    if (!stylistId) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    const queue = await Queue.create({ stylist: stylistId });

    res.status(200).json({ message: "Queue started", queue });
  } catch (error) {}
};

module.exports.stopQueue = async (req, res) => {
  try {
    const stylistId = req.stylist || req.stylist.id;

    if (!stylistId) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    const queue = await Queue.findOneAndDelete({ stylist: stylistId });

    return res.status(200).json({ message: "Queue stopped", queue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to stop queue" });
  }
};

module.exports.getQueue = async (req, res) => {
  try {
    const stylistId = req.stylist || req.stylist.id;

    if (!stylistId) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    const queue = await Queue.findOne({ stylist: stylistId });

    return res.status(200).json({ message: "Queue found", queue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get queue" });
  }
};
