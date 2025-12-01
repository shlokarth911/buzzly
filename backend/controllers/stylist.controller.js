const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Stylist = require("../models/Stylist");
const { createStylist } = require("../services/stylist.service");
const Salon = require("../models/Salon");

module.exports.registerStylist = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, address, city, services } =
      req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "please fill out the required feilds" });
    }

    if (password.lenght < 6) {
      return res
        .status(400)
        .json({ message: "Password must be 6 charecters long" });
    }

    const isStylistAlreadyExists = await Stylist.findOne({ email });
    if (isStylistAlreadyExists) {
      return res.status(400).json({ message: "Stylist already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const stylist = await createStylist({
      name,
      email,
      password: hashPassword,
      phoneNumber,
      address,
      city,
      services,
    });

    const token = jwt.sign({ id: stylist._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("stylist_token", token);

    res
      .status(201)
      .json({ message: "Stylist registered successfully", stylist });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports.loginStylist = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All feilds are required" });
    }

    const stylist = await Stylist.findOne({ email }).select("+password");

    if (!stylist) {
      return res.status(401).json({ message: "Stylist not found" });
    }

    if (!password || !stylist.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, stylist.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    const token = jwt.sign({ id: stylist._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("stylist_token", token);

    const stylistData = stylist.toObject();
    delete stylistData.password;

    res
      .status(200)
      .json({ message: "Login Successful", token, stylist: stylistData });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports.getStylistProfile = async (req, res) => {
  try {
    res.status(200).json(req.stylist);
  } catch (error) {
    console.log(error);
  }
};

module.exports.enrollInSalon = async (req, res) => {
  try {
    const { salonId, salonNumber } = req.body;
    const stylist = req.stylist;

    if (!stylist) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!salonId) {
      return res.status(400).json({ message: "All feilds are required" });
    }

    const salon = await Salon.findById(salonId);

    if (!salon) {
      return res.status(404).json({ message: "Salon not found" });
    }

    if (salon.salonNumber !== salonNumber) {
      return res.status(400).json({ message: "Invalid salon number" });
    }

    if (stylist.salon) {
      return res
        .status(400)
        .json({ message: "You are already enrolled in a salon" });
    }

    await Stylist.findByIdAndUpdate(stylist._id, {
      $push: { salon: salon._id },
    });

    await Salon.findByIdAndUpdate(salon._id, {
      $push: { stylists: stylist._id },
    });

    res.status(200).json({ message: "Enrolled in salon successfully", salon });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to enroll in salon" });
  }
};
