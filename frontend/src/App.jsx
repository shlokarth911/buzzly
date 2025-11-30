import React from "react";
import { ModeToggle } from "./components/ModeToggle";
import { Toaster } from "@/components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/UserLogin";
import StylistRegister from "./pages/StylistRegister";
import StylistLogin from "./pages/StylistLogin";
import UserProtectedWrapper from "./components/UserProtectedWrapper";
import UserLayout from "./components/UserLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />

        <Route
          path="/user"
          element={
            <UserProtectedWrapper>
              <UserLayout />
            </UserProtectedWrapper>
          }
        >
          <Route path="home" element={<h1>User Home</h1>} />
        </Route>

        {/* Stylist paths */}
        <Route path="/stylist/login" element={<StylistLogin />} />
        <Route path="/stylist/register" element={<StylistRegister />} />

        {/* User paths */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
};

export default App;
