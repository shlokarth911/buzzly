const bookingModel = require("../models/Booking");

module.exports.createBooking = async ({
  stylist,
  user,
  timeBookedFor,
  demandedServices,
  isAccepted,
}) => {
  const bookingData = {
    stylist: Array.isArray(stylist) ? stylist : [stylist],
    user: Array.isArray(user) ? user : [user],
    timeBookedFor,
    demandedServices,
    isAccepted,
  };

  const booking = await bookingModel.create(bookingData);

  return booking;
};
