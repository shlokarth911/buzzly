import React from "react";
import Greeting from "./components/Greeting";
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";

const StylistHome = () => {
  return (
    <div className="p-6">
      <Greeting />

      <Dashboard />
    </div>
  );
};

export default StylistHome;
