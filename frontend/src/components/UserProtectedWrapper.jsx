import axios from "axios";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "./ui/spinner";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("user_token");
  const [loading, setIsLoading] = useState(true);

  const API_BASE = import.meta.env.VITE_BASE_URL || "";

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/user/login");
      return;
    }

    axios
      .get(`${API_BASE}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("user_token");
        navigate("/user/login");
      });
  }, [token, navigate]);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50 h-screen w-screen">
        <Spinner className="size-8" />
      </div>
    );
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
