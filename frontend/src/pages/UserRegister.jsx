import React from "react";
import { UserRegisterForm } from "../features/auth/components/UserRegisterForm";

const UserRegister = () => {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <UserRegisterForm />
      </div>
    </div>
  );
};

export default UserRegister;
