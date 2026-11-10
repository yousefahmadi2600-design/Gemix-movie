import { baseRequest } from "./api";

export const getMediasbyGen = async (mediaType, gen) => {
  const result = await baseRequest.get(`discover/${mediaType}`, {
    params: { without_genres: gen },
  });
  return result;
};
