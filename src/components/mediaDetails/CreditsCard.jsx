import { useNavigate } from "react-router-dom";
import { makeImgURL } from "../../utils/makeImgURL";

const CreditsCard = ({ credit }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/person/${credit.id}`)}
      className="hover:bg-primary/60 hover:text-cream hover:shadow-primary flex h-14 w-60 gap-3 overflow-hidden rounded-full border border-gray-700 transition-all duration-200 hover:cursor-pointer hover:shadow-md"
    >
      <img
        src={makeImgURL(credit.profile_path)}
        className="h-13.5 w-13.5 rounded-full"
      />
      <div>
        <h3 className="font-semibold">{credit.name}</h3>
        <h3 className="text-sm text-gray-400">
          {credit?.job ? credit?.job : `as ${credit.character}`}
        </h3>
      </div>
    </div>
  );
};

export default CreditsCard;
