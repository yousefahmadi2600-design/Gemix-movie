import { genres } from "../../constants/movieGenre";
import { makeImgURL } from "../utils/makeImgURL";

const MediaCard = ({ item }) => {
  return (
    <div className="group my-4 h-80 rounded-xl hover:cursor-pointer">
      <div className="group-hover:shadow-primary border-primary h-5/6 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-400 group-hover:border">
        <img
          src={makeImgURL(item.poster_path)}
          className="h-full w-full transition-all duration-200 group-hover:scale-110"
        />
      </div>

      <div className="pt-2">
        <h2 className="line-clamp-1 text-[15px] font-semibold text-gray-950">
          {item.title ? item.title : item.name}
        </h2>
        <h2 className="text-[12px] font-semibold text-gray-600">
          {
            genres.filter((genre) =>
              item?.genre_ids?.some((genID) => genID === genre.id),
            )[0]?.name
          }
          &nbsp;&middot;&nbsp;
          {item.release_date
            ? item.release_date?.slice(0, 4)
            : item.first_air_date?.slice(0, 4)}
        </h2>
      </div>
    </div>
  );
};

export default MediaCard;
