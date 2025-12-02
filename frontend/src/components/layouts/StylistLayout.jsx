import React from "react";
import { Outlet } from "react-router-dom";

const StylistLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default StylistLayout;
