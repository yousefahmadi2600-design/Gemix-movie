import { useQuery } from "@tanstack/react-query";
import { getEpisodes } from "../services/getEpisodes";

const useEpisodes = (seriesId, seasonNum, { enabled = false }) => {
  const { data } = useQuery({
    queryFn: () => getEpisodes(seriesId, seasonNum),
    queryKey: [seriesId, seasonNum],
    enabled,
  });
  return { data };
};

export default useEpisodes;
