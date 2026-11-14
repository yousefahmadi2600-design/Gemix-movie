import { Star } from "lucide-react";
import { makeImgURL } from "../utils/makeImgURL";
import { genres } from "../../constants/movieGenre";

const MediaSearchCard = ({ result, mediaType, handleClick }) => (
  <div
    onClick={() =>
      handleClick(result.media_type ? result.media_type : mediaType, result.id)
    }
    className="hover:bg-primary/50 group hover:text-cream flex gap-5 rounded-xl p-2 transition-all duration-200 hover:cursor-pointer"
  >
    <img
      src={makeImgURL(result.poster_path)}
      className="h-20 w-13 rounded-md"
    />
    <div className="flex-1">
      <h2>{result.name}</h2>
      {console.log(result)}
      <div className="flex flex-wrap gap-2 py-4 text-sm">
        <Star className="size-4.5 fill-yellow-400 stroke-yellow-400" />
        <h3 className="text-yellow-400">{result.vote_average?.toFixed(1)}</h3>
        &nbsp;&middot;&nbsp;
        {result.release_date
          ? result.release_date.slice(0, 4)
          : result.first_air_date?.slice(0, 4)}
        {genres
          .filter((genre) =>
            result?.genre_ids?.some((genID) => genID === genre.id),
          )
          .map((item) => (
            <h3 key={item.id}>&nbsp;&middot;&nbsp;{item.name}</h3>
          ))}
      </div>
    </div>
    <div>
      <div className="flex items-center justify-center rounded-md border border-gray-500 px-2 text-[10px] font-semibold capitalize group-hover:border-white">
        {result.media_type ? result.media_type : mediaType}
      </div>
    </div>
  </div>
);

export default MediaSearchCard;
