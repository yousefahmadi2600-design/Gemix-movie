import { apiKey, baseRequest } from "./api";

export const getEpisodes = async (seriesId, seasonNum) => {
  const result = await baseRequest.get(
    `tv/${seriesId}/season/${seasonNum}?api_key=${apiKey}`,
  );
  return result;
};
