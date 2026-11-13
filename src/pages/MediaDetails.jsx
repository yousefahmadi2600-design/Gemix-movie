import { useParams } from "react-router-dom";
import { makeImgURL } from "../utils/makeImgURL";
import useMediaDetails from "../hooks/useMediaDetails";
import useSimilarMedias from "../hooks/useSimilarMedias";
import CardSlider from "../components/ui/CardSlider";
import useMediasByGen from "../hooks/useMediasByGen";
import { Bookmark, ChevronDown, Eye, Heart, Play, Star } from "lucide-react";
import Button from "../components/ui/Button";
import { useQuery } from "@tanstack/react-query";
import { getMediaCredits } from "../services/getMediaCredits";
import CreditsCard from "../components/mediaDetails/CreditsCard";
import { useState } from "react";
import SeasonSelect from "../components/ui/SeasonSelect";
import useEpisodes from "../hooks/useEpisodes";
import EpisodeCard from "../components/EpisodeCard";

const MediaDetails = () => {
  const { mediaType, id } = useParams();

  const { data: mediaData } = useMediaDetails(mediaType, id, { enabled: true });
  const media = mediaData?.data;

  const { data: similarMediasData } = useSimilarMedias(mediaType, id);
  const similarMedias = similarMediasData?.data;

  const { data: mediasByGenData } = useMediasByGen(
    mediaType,
    media?.genres[0]?.id,
    { enabled: media ? true : false },
  );
  const mediasByGen = mediasByGenData?.data;

  const { data: mediaCreditsData } = useQuery({
    queryFn: () => getMediaCredits(mediaType, id),
    queryKey: ["mediaCredits", id],
  });
  const mediaCredits = mediaCreditsData?.data;

  const [seasonNum, setSeasonNum] = useState({ value: 1, label: "Season 1" });
  const seasonOptions = Array.from(
    {
      length: media?.number_of_seasons,
    },
    (_, index) => ({ value: index + 1, label: `Season ${index + 1}` }),
  );
  const { data: episodes } = useEpisodes(id, seasonNum.value, {
    enabled: mediaType === "tv" ? true : false,
  });
  const convertHour = (min) => {
    const hour = Math.trunc(min / 60);
    const rest = (min - hour * 60).toFixed(0);
    return `${hour}h ${rest == 0 ? `` : `${rest}m`}`;
  };

  const [isAllCastVisible, setIsAllCastVisible] = useState(false);
  const smallCastSlice = mediaCredits?.cast?.slice(0, 5);
  const bigCastSlice = mediaCredits?.cast?.slice(0, 15);
  const [isAllCrewVisible, setIsAllCrewVisible] = useState(false);
  const smallCrewSlice = mediaCredits?.crew?.slice(0, 5);
  const bigCrewSlice = mediaCredits?.crew?.slice(0, 15);

  const [isAllEpisodesVisible, setIsAllEpisodesVisible] = useState(false);

  return (
    <main>
      <div
        className="relative h-180 w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
               linear-gradient(to bottom , transparent, transparent, transparent,transparent, transparent,rgba(255,243,225,0.1),rgba(255,243,225,0.4),white),
                url(${makeImgURL(media?.backdrop_path)})
       `,
        }}
      >
        {console.log(media)}
        <div className="h-full w-full bg-black/10"></div>
        <div className="absolute top-4/10 left-1/20 w-100 text-white">
          <h1 className="w-full py-10 text-center text-5xl">{media?.title}</h1>
          <h2 className="pb-2">{media?.tagline}</h2>
          <div className="flex gap-2 py-4 font-semibold">
            <h3 className="flex gap-1 text-yellow-400">
              <Star className="size-4.5 fill-yellow-400 stroke-yellow-400" />
              {media?.vote_average.toFixed(1)}
            </h3>
            &nbsp;&middot;&nbsp;
            <h3>
              {media?.release_date
                ? media?.release_date?.slice(0, 4)
                : media?.first_air_date?.slice(0, 4)}
            </h3>
            &nbsp;&middot;&nbsp;
            <h3>
              {mediaType !== "movie"
                ? `${media?.number_of_seasons} seasons`
                : convertHour(media?.runtime)}
            </h3>
          </div>
          <ul className="flex gap-2 py-4">
            {media?.genres?.map((gen) => (
              <li
                key={gen.id}
                className="bg-primary/70 flex h-7 items-center justify-center rounded-sm border border-gray-400 px-2 text-sm text-white"
              >
                {gen.name}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 py-6 text-black">
            <button className="bg-primary hover:bg-primary/90 shadow-primary/70 flex h-10 w-25 items-center justify-center rounded-3xl text-white shadow-lg hover:cursor-pointer">
              <Play /> Play
            </button>
            <Button>
              <Bookmark className="stroke-gray-200 p-0.5" />
            </Button>
            <Button>
              <Heart className="stroke-gray-200 p-0.5" />
            </Button>
            <Button>
              <Eye className="stroke-gray-200 p-0.5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div>
          <h2 className="py-5 text-3xl font-bold">Overview</h2>
          <h3 className="font-semibold">{media?.overview}</h3>
        </div>
        {mediaType === "tv" && (
          <div className="py-5">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Episodes</h2>
              <SeasonSelect
                seasonOptions={seasonOptions}
                seasonNum={seasonNum}
                setSeasonNum={setSeasonNum}
              />
            </div>
            <div className="my-5 grid grid-cols-2 gap-3 px-4">
              {isAllEpisodesVisible
                ? episodes?.data?.episodes?.map((episode, index) => (
                    <EpisodeCard key={index} episode={episode} />
                  ))
                : episodes?.data?.episodes
                    ?.slice(0, 20)
                    ?.map((episode, index) => (
                      <EpisodeCard key={index} episode={episode} />
                    ))}
            </div>
            {episodes?.data?.episodes?.length > 20 ? (
              <button
                onClick={() => setIsAllEpisodesVisible(!isAllEpisodesVisible)}
                className="hover:bg-primary/60 hover:shadow-primary hover:text-cream my-4 ml-3 flex h-9 w-44 items-center justify-center gap-2 rounded-full border border-gray-400 shadow-md transition-all duration-200 hover:cursor-pointer"
              >
                {isAllEpisodesVisible ? "Less Episodes" : "All Episodes"}
                <ChevronDown className="hover:stroke-cream" />
              </button>
            ) : (
              <></>
            )}
          </div>
        )}
        <div className="py-5">
          <h2 className="py-5 text-3xl font-bold">Top Cast</h2>
          <ul className="flex flex-wrap gap-4">
            {isAllCastVisible
              ? bigCastSlice?.map((cast) => (
                  <li>
                    <CreditsCard credit={cast} />
                  </li>
                ))
              : smallCastSlice?.map((cast) => (
                  <li>
                    <CreditsCard credit={cast} />
                  </li>
                ))}
          </ul>
          {mediaCredits?.cast?.length > 5 && !isAllCastVisible && (
            <button
              onClick={() => setIsAllCastVisible(!isAllCastVisible)}
              className="hover:bg-primary/60 hover:shadow-primary hover:text-cream my-4 flex h-9 w-30 items-center justify-center gap-2 rounded-full border border-gray-400 shadow-md transition-all duration-200 hover:cursor-pointer"
            >
              More <ChevronDown className="hover:stroke-cream" />
            </button>
          )}
        </div>
        <div className="py-5">
          <h2 className="py-5 text-3xl font-bold">Top Crew</h2>
          <ul className="flex flex-wrap gap-4">
            {isAllCrewVisible
              ? bigCrewSlice?.map((crew) => (
                  <li>
                    <CreditsCard credit={crew} />
                  </li>
                ))
              : smallCrewSlice?.map((crew) => (
                  <li>
                    <CreditsCard credit={crew} />
                  </li>
                ))}
          </ul>
          {mediaCredits?.crew?.length > 5 && !isAllCrewVisible && (
            <button
              onClick={() => setIsAllCrewVisible(!isAllCrewVisible)}
              className="hover:bg-primary/60 hover:shadow-primary hover:text-cream my-4 flex h-9 w-30 items-center justify-center gap-2 rounded-full border border-gray-400 shadow-md transition-all duration-200 hover:cursor-pointer"
            >
              More <ChevronDown className="hover:stroke-cream" />
            </button>
          )}
        </div>
        <CardSlider header={"More Like This"} list={similarMedias?.results} />
        <CardSlider header={"You Might Like"} list={mediasByGen?.results} />
      </div>
    </main>
  );
};

export default MediaDetails;
