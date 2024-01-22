import axios from "axios";

export const BASE_URL = "https://openapiv1.coinstats.app";

const options = {
  headers: {
    accept: "application/json",
    // "X-API-KEY": import.meta.env.REACT_APP_API_KEY,
    "X-API-KEY": "U7kn8e2jfOubxRgBXklUK/bAl2DLR9t9Y6htbP4yPFM=",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
