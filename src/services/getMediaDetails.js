import { baseRequest } from "./api";

export const getMediaDetails = async (mediaType, id) => {
  const result = await baseRequest.get(`${mediaType}/${id}`);
  return result;
};
