import { apiKey, baseRequest } from "./api";

export const getMedias = async (endpoint) => {
  const result = await baseRequest.get(`${endpoint}?api_key=${apiKey}`);
  return result.data;
};
