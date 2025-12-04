import React from "react";
import { ModeToggle } from "./components/ModeToggle";
import { Toaster } from "@/components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import UserRegister from "./pages/user/auth/UserRegister";
import UserLogin from "./pages/user/auth/UserLogin";
import StylistRegister from "./pages/stylist/auth/StylistRegister";
import StylistLogin from "./pages/stylist/auth/StylistLogin";
import UserProtectedWrapper from "./components/wrappers/UserProtectedWrapper";
import UserLayout from "./components/layouts/UserLayout";
import StylistProtectedWrapper from "./components/wrappers/StylistProtectedWrapper";
import StylistLayout from "./components/layouts/StylistLayout";
import StylistHome from "./pages/stylist/home/StylistHome";

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

        <Route
          path="/stylist"
          element={
            <StylistProtectedWrapper>
              <StylistLayout />
            </StylistProtectedWrapper>
          }
        >
          <Route path="home" element={<StylistHome />} />
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
