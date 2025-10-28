const router = require("express").Router();

const {
  registerStylist,
  loginStylist,
  getStylistProfile,
} = require("../controllers/stylist.controller");
const { authStylist } = require("../middlewares/auth.middleware");

router.post("/register", registerStylist);
router.post("/login", loginStylist);

router.get("/profile", authStylist, getStylistProfile);

module.exports = router;
