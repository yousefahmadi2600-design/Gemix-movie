import { useQuery } from "@tanstack/react-query";
import { getSimilarMedias } from "../services/getSimilarMedias";

const useSimilarMedias = (mediaType, id) => {
  const { data } = useQuery({
    queryFn: () => getSimilarMedias(mediaType, id),
    queryKey: [mediaType, id],
  });
  return { data };
};

export default useSimilarMedias;
