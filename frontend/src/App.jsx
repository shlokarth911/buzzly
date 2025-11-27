import React from "react";
import { ModeToggle } from "./components/ModeToggle";
import { Toaster } from "@/components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        {/* Stylist paths */}
        <Route path="/stylist/login" element={<h1>Stylist Login</h1>} />
        <Route path="/stylist/register" element={<h1>Stylist Register</h1>} />

        {/* User paths */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
};

export default App;
