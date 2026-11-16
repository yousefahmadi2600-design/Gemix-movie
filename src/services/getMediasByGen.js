import { baseRequest } from "./api";

export const getMediasbyGen = async (mediaType, gen) => {
  const result = await baseRequest.get(`discover/${mediaType}`, {
    params: { with_genres: gen, "vote_average.gte": 8 },
  });
  return result;
};
