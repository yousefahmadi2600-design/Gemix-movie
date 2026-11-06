import { Bookmark, Download, Server, Subtitles, Tv } from "lucide-react";
import GridItem from "./GridItem";

const Footer = () => {
  return (
    <div className="bg-primary mt-10 p-10 text-white">
      <div>
        <h2 className="text-3xl font-bold">
          Gemix - Watch Free Movies & TV Shows Online
        </h2>
        <h3 className="my-4">
          Gemix is a free streaming site for movies and TV shows. Press play on
          thousands of films and complete series in HD, many of them in 4K, with
          no ads and no sign-up needed. The catalogue updates around the clock,
          so new releases and fresh episodes appear as soon as they can be
          played.
        </h3>
        <h3 className="mb-4">
          Browse movies and TV shows, see what is trending, check the TV
          calendar for this week's new episodes, or filter the whole library by
          genre, year and streaming service in Explore.
        </h3>
      </div>
      <div>
        <h2 className="pb-3 text-2xl font-semibold">
          What you can do on Gemix
        </h2>
        <div className="grid grid-cols-3">
          <div className="flex gap-3 pb-4">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                <i className="rounded-sm border px-1 text-sm font-semibold text-yellow-500">
                  4K
                </i>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Stream in HD and 4K</h3>
              <p className="text-sm text-gray-300">
                Every title plays right in your browser. Pick a quality yourself
                or let the player follow your connection.
              </p>
            </div>
          </div>
          <GridItem
            icon={<Download />}
            title={"Download to watch later"}
            details={
              "Movie and episode pages list direct download links with their quality and file size."
            }
          />
          <GridItem
            icon={<Bookmark />}
            title={"Your own lists"}
            details={
              "A free account adds a watchlist, favourites, resume across devices, new-episode alerts, recommendations and achievements."
            }
          />
          <GridItem
            icon={<Tv />}
            title={"Any screen"}
            details={
              "Works on phones, tablets, laptops and smart-TV browsers, with Chromecast and picture-in-picture where your device allows it."
            }
          />
          <GridItem
            icon={<Subtitles />}
            title={"Subtitles in your language"}
            details={
              "Use the built-in subtitles, search OpenSubtitles in more than 40 languages, or upload your own file."
            }
          />
          <GridItem
            icon={<Server />}
            title={"Switch servers in one tap"}
            details={
              "Most titles are on several servers. If one does not play,pick another from the player's settings menu."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
