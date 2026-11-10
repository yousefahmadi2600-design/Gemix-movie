import { makeImgURL } from "../utils/makeImgURL";

const EpisodeCard = ({ episode }) => {
  return (
    <div className="hover:bg-primary/60 hover:shadow-primary/70 hover:text-cream flex rounded-xl p-2 py-2 transition-all duration-200 hover:cursor-pointer hover:shadow-md">
      <img
        src={makeImgURL(episode.still_path)}
        className="h-24 w-40 rounded-xl"
      />
      <div className="ml-6 h-full flex-5 py-2">
        <h2 className="flex gap-2">
          <span className="mr-2 line-clamp-1">{episode.episode_number}</span>
          {episode.name}
        </h2>
        <h3 className="line-clamp-2">{episode.overview}</h3>
      </div>
      <div className="flex-1 pt-4" dir="rtl">
        <div className="text-sm">{episode.runtime} min</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
