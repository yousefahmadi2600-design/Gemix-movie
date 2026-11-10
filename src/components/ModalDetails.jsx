import {
  Bookmark,
  ChevronDown,
  Clapperboard,
  ExternalLink,
  Eye,
  Heart,
  Play,
  Star,
  X,
} from "lucide-react";
import { makeImgURL } from "../utils/makeImgURL";
import { genres } from "../../constants/movieGenre";
import useMediaDetails from "../hooks/useMediaDetails";
import { useState } from "react";
import useEpisodes from "../hooks/useEpisodes";
import EpisodeCard from "./EpisodeCard";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button.jsx";
import SeasonSelect from "./ui/SeasonSelect.jsx";

const ModalDetails = ({ media, isDetailsOpen, setIsDetailsOpen }) => {
  const { data: tvDetailsData } = useMediaDetails(media.media_type, media.id, {
    enabled: media.media_type === "tv",
  });
  const tvDetails = tvDetailsData?.data;

  const [seasonNum, setSeasonNum] = useState({ value: 1, label: "Season 1" });
  const seasonOptions = Array.from(
    {
      length: tvDetails?.number_of_seasons,
    },
    (_, index) => ({ value: index + 1, label: `Season ${index + 1}` }),
  );

  const { data: episodesData } = useEpisodes(media.id, seasonNum.value);
  const episodes = episodesData?.data?.episodes;
  const navigate = useNavigate();
  const [visibleEpisodeNum, setVisibleEpisodeNum] = useState(20);

  return (
    <div
      className="fixed inset-0 z-30 bg-black/40"
      onClick={() => {
        setIsDetailsOpen(!isDetailsOpen);
      }}
    >
      <div className="relative z-40 h-full w-full overflow-y-scroll pt-10">
        <div className="absolute top-16 right-70 z-50">
          <Button
            handleClick={() => {
              setIsDetailsOpen(false);
            }}
          >
            <X className="h-full w-full rounded-full stroke-gray-100 p-2" />
          </Button>
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute left-1/2 w-250 -translate-x-1/2 overflow-hidden rounded-3xl"
          style={{ backgroundColor: "#e4d9c9" }}
        >
          <div
            className="h-130 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `
               linear-gradient(to bottom , transparent, transparent, transparent,transparent, transparent,rgba(255,243,225,0.1),rgba(255,243,225,0.4),#FFF3E1),
                url(${makeImgURL(media.backdrop_path)})
       `,
            }}
          >
            <div className="h-full w-full bg-black/10"></div>
          </div>
          <div className="-mt-30 mb-15 space-y-2 rounded-b-2xl px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                {media.title ? media.title : media.name}
              </h2>
              <Button children={<Clapperboard className="stroke-gray-100" />} />
            </div>
            <ul className="flex items-center gap-1 text-sm">
              <li>
                <Star className="size-4.5 fill-yellow-400 stroke-yellow-400" />
              </li>
              <li className="font-bold text-yellow-400">
                {media.vote_average.toFixed(1)}
              </li>
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;
              <li className="font-semibold">
                {media.release_date
                  ? media.release_date?.slice(0, 4)
                  : media.first_air_date?.slice(0, 4)}
              </li>
            </ul>
            <ul className="flex gap-2 py-4">
              {genres
                .filter((genre) =>
                  media?.genre_ids?.some((genID) => genID === genre.id),
                )
                .map((genre, index) => (
                  <li
                    key={index}
                    className="bg-primary/70 flex h-7 items-center justify-center rounded-sm border border-gray-400 px-2 text-sm text-white"
                  >
                    {genre.name}
                  </li>
                ))}
            </ul>
            <h3 className="font-medium">{media.overview}</h3>
            <div className="flex gap-2 border-b border-b-gray-600 py-8">
              <button className="bg-primary shadow-primary/70 hover:bg-primary/90 flex h-10 w-25 items-center justify-center rounded-3xl text-white shadow-lg hover:cursor-pointer">
                <Play /> Play
              </button>
              <Button>
                <Bookmark className="stroke-gray-800 p-0.5" />
              </Button>
              <Button children={<Heart className="stroke-gray-800 p-0.5" />} />
              <Button
                handleClick={() => {
                  navigate(`/mediaDetails/${media.media_type}/${media.id}`);
                }}
              >
                <ExternalLink className="stroke-gray-800 p-0.5" />
              </Button>
              <Button>
                <Eye className="stroke-gray-800 p-0.5" />
              </Button>
            </div>
            {tvDetails && (
              <>
                <div className="flex items-center justify-between py-2">
                  <h3 className="text-2xl font-semibold">Episodes</h3>
                  <SeasonSelect
                    seasonOptions={seasonOptions}
                    seasonNum={seasonNum}
                    setSeasonNum={setSeasonNum}
                  />
                </div>
                <div className="max-h-100 overflow-y-scroll px-4">
                  <div>
                    {episodes
                      ?.slice(0, visibleEpisodeNum)
                      .map((episode, index) => (
                        <EpisodeCard key={index} episode={episode} />
                      ))}
                  </div>
                  {visibleEpisodeNum < episodes?.length && (
                    <button
                      onClick={() => setVisibleEpisodeNum((prev) => prev + 10)}
                      className="hover:bg-primary/60 hover:shadow-primary hover:text-cream my-4 ml-3 flex h-9 w-44 items-center justify-center gap-2 rounded-full border border-gray-400 shadow-md transition-all duration-200 hover:cursor-pointer"
                    >
                      Load More
                      <ChevronDown className="hover:stroke-cream" />
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
