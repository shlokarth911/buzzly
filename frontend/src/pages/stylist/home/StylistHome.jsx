import React from "react";
import Greeting from "./components/Greeting";
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import UpcomingAppointments from "./components/UpcomingAppointments";

const StylistHome = () => {
  return (
    <div className="p-6">
      <Greeting />

      <Dashboard />

      <UpcomingAppointments />
    </div>
  );
};

export default StylistHome;
