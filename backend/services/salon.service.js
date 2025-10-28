const Salon = require("../models/Salon");

module.exports.createSalon = async ({
  name,
  type,
  address,
  phone,
  salonNumber,
}) => {
  try {
    const salon = await Salon.create({
      name,
      type,
      address,
      phone,
      salonNumber,
    });

    return salon;
  } catch (error) {
    console.log(error);
  }
};
