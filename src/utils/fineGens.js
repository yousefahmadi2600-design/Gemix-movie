import { movieGenres, tvGenres } from "../../constants/genres";

export const findGens = (type, genIds) => {
  if (type === "movie") {
    return movieGenres.filter((genre) =>
      genIds?.some((genID) => genID === genre.id),
    );
  }
  if (type === "tv") {
    return tvGenres.filter((genre) =>
      genIds?.some((genID) => genID === genre.id),
    );
  }
};
