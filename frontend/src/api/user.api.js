import axios from "axios";

const API_BASE = import.meta.env.VITE_BASE_URL || "";

export const registerUser = async ({ userData }) => {
  try {
    const response = await axios.post(`${API_BASE}/user/register`, userData);

    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem("user_token", data.token);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginUser = async ({ userData }) => {
  try {
    const response = await axios.post(`${API_BASE}/user/login`, userData);

    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem("user_token", data.token);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
