import { makeImgURL } from "../utils/makeImgURL";

const PersonSearchCard = ({ result, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(result.id)}
      className="hover:bg-primary/50 group flex gap-5 rounded-xl p-2 transition-all duration-200 hover:cursor-pointer hover:text-white"
    >
      <img
        src={makeImgURL(result.profile_path)}
        className="h-20 w-13 rounded-md"
      />
      <div className="flex-1">
        <h2>{result.name}</h2>
        <h3 className="group-hover:text-cream text-sm text-gray-500">
          {result.known_for_department}
        </h3>
      </div>
      <div>
        <div className="flex items-center justify-center rounded-md border border-gray-500 px-2 text-[10px] font-semibold group-hover:border-white">
          PERSON
        </div>
      </div>
    </div>
  );
};

export default PersonSearchCard;
