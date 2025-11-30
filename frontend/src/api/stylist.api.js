import axios from "axios";

const API_BASE = import.meta.env.VITE_BASE_URL || "";

export const registerStylist = async ({ stylistData }) => {
  try {
    const response = await axios.post(
      `${API_BASE}/stylist/register`,
      stylistData
    );

    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem("stylist_token", data.token);
    }
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const stylistLogin = async ({ stylistData }) => {
  try {
    const response = await axios.post(`${API_BASE}/stylist/login`, stylistData);

    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem("stylist_token", data.token);
    }
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
