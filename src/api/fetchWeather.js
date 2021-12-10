import axios from "axios";

const URL = "api.openweathermap.org/data/2.5/weather";

const API_KEY = "c6ff8cccdf368652448f200cdba415a3";
export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    q: query,
    units: "metric",
    APPID: API_KEY,
  });
  return data;
};
