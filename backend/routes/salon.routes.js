const express = require("express");
const {
  listSalons,
  registerSalon,
} = require("../controllers/salon.controller");
const router = express.Router();

router.post("/register", registerSalon);
router.get("/list", listSalons);

module.exports = router;
