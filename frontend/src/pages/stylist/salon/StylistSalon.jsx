import React from "react";
import SalonDetails from "./components/SalonDetails";

const StylistSalon = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold pb-3 border-b border-neutral-700">
        Your Salon
      </h1>

      <div>
        <SalonDetails />
      </div>
    </div>
  );
};

export default StylistSalon;
