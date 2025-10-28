const jwt = require("jsonwebtoken");
const userModel = require("../models/User");
const stylistModel = require("../models/Stylist");

module.exports.authUser = async (req, res, next) => {
  const token =
    req.cookies.user_token ||
    req.headers.authorization?.split(" ")[1] ||
    req.body.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({ _id: decoded.id });

    req.user = user;

    return next();
  } catch (error) {
    console.log("Error in AuthUser", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports.authStylist = async (req, res, next) => {
  const token =
    req.cookies.stylist_token ||
    req.headers.authorization?.split(" ")[1] ||
    req.body.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const stylist = await stylistModel.findOne({ _id: decoded.id });

    req.stylist = stylist;

    return next();
  } catch (error) {
    console.log("Error in AuthStylist", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
