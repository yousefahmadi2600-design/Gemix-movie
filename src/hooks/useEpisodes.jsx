import { useQuery } from "@tanstack/react-query";
import { getEpisodes } from "../services/getEpisodes";

const useEpisodes = (seriesId, seasonNum) => {
  const { data } = useQuery({
    queryFn: () => getEpisodes(seriesId, seasonNum),
    queryKey: [seriesId, seasonNum],
  });
  return { data };
};

export default useEpisodes;
