import { apiKey, baseRequest } from "./api";

export const getMediaDetails = async (endpoint, id) => {
  const result = await baseRequest.get(`${endpoint}/${id}?api_key=${apiKey}`);
  return result;
};
