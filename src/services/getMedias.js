import { baseRequest } from "./api";

export const getMedias = async (endpoint) => {
  const result = await baseRequest.get(endpoint);
  return result;
};
