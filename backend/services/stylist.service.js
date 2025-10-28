const Stylist = require("../models/Stylist");

module.exports.createStylist = async ({
  name,
  email,
  password,
  phoneNumber,
  services,
}) => {
  const stylist = await Stylist.create({
    name,
    email,
    password,
    phoneNumber,
    services,
  });

  return stylist;
};
