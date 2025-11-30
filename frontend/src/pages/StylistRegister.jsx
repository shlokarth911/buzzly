import React from "react";
import StylistRegisterForm from "../components/StylistRegisterForm";

const StylistRegister = () => {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <StylistRegisterForm />
      </div>
    </div>
  );
};

export default StylistRegister;
