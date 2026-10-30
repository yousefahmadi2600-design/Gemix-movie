import { apiKey, baseRequest } from "./api";

export const fetchMovies = async (endpoint) => {
  const result = await baseRequest.get(`${endpoint}?api_key=${apiKey}`);
  return result.data;
};
