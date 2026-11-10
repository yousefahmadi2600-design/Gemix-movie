import { baseRequest } from "./api";

export const getMediaCredits = async (mediaType, id) => {
  const result = await baseRequest.get(`${mediaType}/${id}/credits`);
  return result;
};
