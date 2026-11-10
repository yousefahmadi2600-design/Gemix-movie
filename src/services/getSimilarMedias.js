import { baseRequest } from "./api";

export const getSimilarMedias = async (mediaType, id) => {
  const result = await baseRequest.get(`${mediaType}/${id}/similar`);
  return result;
};
