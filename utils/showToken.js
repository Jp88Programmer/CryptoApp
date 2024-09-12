import axios from "axios";

const apiUrl = "https://coinranking1.p.rapidapi.com/coins";

export const FetchAllCoins = async () => {
  const options = {
    method: "GET",
    url: apiUrl,
    params: {
      referenceCurrencyUuid: process.env.EXPO_PUBLIC_Uuid,
      timePeriod: "24h",
      tiers: "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": process.env.EXPO_PUBLIC_API_KEY,
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
