import React from "react";
import { UserLoginForm } from "../components/UserLoginForm";

const UserLogin = () => {
  return (
    <>
      <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <UserLoginForm />
        </div>
      </div>
    </>
  );
};

export default UserLogin;
