import {
  Bookmark,
  Clapperboard,
  ExternalLink,
  Eye,
  Heart,
  Play,
  Star,
  X,
} from "lucide-react";
import { makeImgURL } from "../utils/makeImgURL";
import Button from "./ui/button";
import { genres } from "../../constants/movieGenre";
import useMediaDetails from "../hooks/useMediaDetails";
import { useState } from "react";
import Select from "react-select";
import useEpisodes from "../hooks/useEpisodes";
import EpisodeCard from "./EpisodeCard";

const ModalDetails = ({ content, isDetailsOpen, setIsDetailsOpen }) => {
  const { data: tvDetails } = useMediaDetails(content.media_type, content.id, {
    enabled: content.media_type === "tv",
  });
  const [seasonNum, setSeasonNum] = useState({ value: 1, label: "Season 1" });
  const seasonOptions = Array.from(
    {
      length: tvDetails?.data?.seasons?.length,
    },
    (_, index) => ({ value: index + 1, label: `Season ${index + 1}` }),
  );

  const { data: episodes } = useEpisodes(
    content.id,
    seasonNum.value,
    //  === tvDetails?.data?.seasons?.length &&
    //   // tvDetails?.data?.in_production
    //   // ? 0
    //   // : seasonNum.value,
  );
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40"
      onClick={() => {
        setIsDetailsOpen(!isDetailsOpen);
      }}
    >
      <div className="relative h-full w-full overflow-y-scroll pt-10">
        <div className="absolute top-16 right-70 z-30">
          <Button
            children={
              <X
                onClick={() => {
                  setIsDetailsOpen(false);
                }}
                className="h-full w-full rounded-full stroke-gray-100 p-2"
              />
            }
          />
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
                url(${makeImgURL(content.backdrop_path)})
       `,
            }}
          >
            <div className="h-full w-full bg-black/10"></div>
          </div>
          <div className="-mt-30 mb-15 space-y-2 rounded-b-2xl px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                {content.title ? content.title : content.name}
              </h2>
              <Button children={<Clapperboard className="stroke-gray-100" />} />
            </div>
            <ul className="flex items-center gap-1 text-sm">
              <li>
                <Star className="size-4.5 fill-yellow-400 stroke-yellow-400" />
              </li>
              <li className="font-bold text-yellow-400">
                {content.vote_average.toFixed(1)}
              </li>
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;
              <li className="font-semibold">
                {content.release_date
                  ? content.release_date?.slice(0, 4)
                  : content.first_air_date?.slice(0, 4)}
              </li>
            </ul>
            <ul className="flex gap-2 py-4">
              {genres
                .filter((genre) =>
                  content?.genre_ids?.some((genID) => genID === genre.id),
                )
                .map((genre, index) => (
                  <li
                    key={index}
                    className="flex h-7 items-center justify-center rounded-sm border border-gray-400 bg-gray-100 px-2 text-sm text-gray-900"
                  >
                    {genre.name}
                  </li>
                ))}
            </ul>
            <h3 className="font-medium">{content.overview}</h3>
            <div className="flex gap-2 border-b border-b-gray-600 py-8">
              <button className="bg-primary shadow-primary/70 hover:bg-primary/90 flex h-10 w-25 items-center justify-center rounded-3xl text-white shadow-lg hover:cursor-pointer">
                <Play /> Play
              </button>
              <Button
                children={<Bookmark className="stroke-gray-800 p-0.5" />}
              />
              <Button children={<Heart className="stroke-gray-800 p-0.5" />} />
              <Button
                children={<ExternalLink className="stroke-gray-800 p-0.5" />}
              />
              <Button children={<Eye className="stroke-gray-800 p-0.5" />} />
            </div>
            {tvDetails && (
              <>
                <div className="flex items-center justify-between py-2">
                  <h3 className="text-2xl font-semibold">Episodes</h3>
                  <Select
                    options={seasonOptions}
                    value={seasonNum}
                    onChange={setSeasonNum}
                    styles={{
                      control: (baseStyles) => ({
                        ...baseStyles,
                        border: 0,
                        backgroundColor: "#fff3e1",
                        fontSize: 16,
                        fontWeight: 500,
                        boxShadow: 0,
                        width: 150,
                        borderRadius: 8,
                      }),
                      menu: (baseStyles) => ({
                        ...baseStyles,
                        border: "#6f0000",
                        backgroundColor: "#fff3e1",
                        zIndex: 20,
                        padding: 2,
                        borderRadius: 8,
                      }),
                      option: (baseStyles, { isSelected, isFocused }) => ({
                        ...baseStyles,
                        borderRadius: 8,
                        backgroundColor: isSelected
                          ? "#6f0000"
                          : isFocused
                            ? "#6f00009c"
                            : "#fff3e1",
                        color: isFocused
                          ? "white"
                          : isSelected
                            ? "white"
                            : "black",
                        transition: "all 200ms ease",
                      }),
                    }}
                  />
                </div>
                <div className="max-h-100 overflow-y-scroll px-4">
                  <div className="">
                    {episodes?.data?.episodes.map((episode, index) => (
                      <EpisodeCard key={index} episode={episode} />
                    ))}
                  </div>
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
