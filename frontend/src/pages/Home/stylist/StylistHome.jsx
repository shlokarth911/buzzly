import React from "react";
import Greeting from "./components/Greeting";
import Search from "./components/Search";

const StylistHome = () => {
  return (
    <div className="p-6">
      <Greeting />
      <Search />
    </div>
  );
};

export default StylistHome;
