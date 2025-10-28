const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectToDB = require("./db/db.config.js");
connectToDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const userRoutes = require("./routes/user.routes.js");
const stylistRoutes = require("./routes/stylist.routes.js");
const bookingRoutes = require("./routes/booking.routes.js");

app.use("/user", userRoutes);
app.use("/stylist", stylistRoutes);
app.use("/booking", bookingRoutes);

module.exports = app;
