import axios from "axios";

const fetchPlaces = async (query, limit = 5) => {
  const options = {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
    params: { namePrefix: query, limit: limit },
    headers: {
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export { fetchPlaces };
