import { makeImgURL } from "../utils/makeImgURL";

const EpisodeCard = ({ episode }) => {
  return (
    <div className="flex py-2">
      <img
        src={makeImgURL(episode.still_path)}
        className="h-24 w-40 rounded-2xl"
      />
      <div className="ml-6 h-full flex-5 py-2">
        <h2 className="flex gap-2">
          <span className="mr-2">{episode.episode_number}</span>
          {episode.name}
        </h2>
        <h3>{episode.overview}</h3>
      </div>
      <div className="flex-1 pt-4" dir="rtl">
        <div className="text-sm">{episode.runtime} min</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
