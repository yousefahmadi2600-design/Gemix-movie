import { useQuery } from "@tanstack/react-query";
import { getMediasbyGen } from "../services/getMediasByGen";

const useMediasByGen = (mediaType, gen, { enabled = false }) => {
  const { data } = useQuery({
    queryFn: () => getMediasbyGen(mediaType, gen),
    queryKey: [mediaType, gen],
    enabled,
  });
  return { data };
};

export default useMediasByGen;
