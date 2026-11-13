import { useQuery } from "@tanstack/react-query";
import { getPerson } from "../services/getPerson";
import { useParams } from "react-router-dom";
import { makeImgURL } from "../utils/makeImgURL";
import { useState } from "react";
import { getPersonMedias } from "../services/getPersonMedias";
import MediaCard from "../components/MediaCard";
import ModalDetails from "../components/ModalDetails";
import Button from "../components/ui/Button";
import { Heart } from "lucide-react";

const PersonProfile = () => {
  const { id } = useParams();
  const { data: personData } = useQuery({
    queryFn: () => getPerson(id),
    queryKey: ["person", id],
  });
  const person = personData?.data;

  const { data: personMedias } = useQuery({
    queryFn: () => getPersonMedias(id),
    queryKey: ["person_medias", id],
  });

  const getAge = (birthday) => {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  const [isMediaOpen, setIsMediaOpen] = useState();
  const [activeMedia, setActiveMedia] = useState(null);
  const [isAllBioVisible, setIsAllBioVisible] = useState(false);
  return (
    <main className="container mx-auto pt-30">
      <div className="flex gap-4">
        <img
          src={makeImgURL(person?.profile_path)}
          className="h-54 w-40 rounded-xl"
        />
        <div>
          <h1 className="flex gap-4 text-4xl font-bold">
            {person?.name}
            <Button>
              <Heart />
            </Button>
          </h1>
          <ul className="grid w-200 grid-cols-5 gap-2 py-4">
            <li>
              <h3 className="text-[12px] text-gray-500">KNOWN FOR</h3>
              <h4>{person?.known_for_department}</h4>
            </li>
            <li>
              <h3 className="text-[12px] text-gray-500">AGE</h3>
              <h4>{person?.birthday ? getAge(person?.birthday) : "_"}</h4>
            </li>
            <li className="col-span-2">
              <h3 className="text-[12px] text-gray-500">BORN IN</h3>
              <h4>{person?.place_of_birth}</h4>
            </li>
            <li>
              <h3 className="text-[12px] text-gray-500">CREDITS</h3>
              <h4>{personMedias?.data?.cast.length}</h4>
            </li>
          </ul>
          <h3
            className={`${isAllBioVisible ? "line-clamp-none" : "line-clamp-3"} font-medium`}
          >
            {person?.biography}
          </h3>
          <button
            onClick={() => setIsAllBioVisible((prev) => !prev)}
            className="py-2 hover:cursor-pointer hover:text-gray-600"
          >
            {isAllBioVisible ? "Show less" : "Read more"}
          </button>
        </div>
      </div>
      <div className="py-4">
        <h2 className="py-3 text-2xl font-semibold">Movies & Shows</h2>
        <div className="grid grid-cols-7 gap-4">
          {personMedias?.data?.cast?.map((cast) => (
            <div
              onClick={() => {
                setActiveMedia(cast);
                setIsMediaOpen(!isMediaOpen);
              }}
            >
              <MediaCard item={cast} />
            </div>
          ))}
        </div>
      </div>
      {isMediaOpen && (
        <ModalDetails
          setIsMediaOpen={setIsMediaOpen}
          isMediaOpen={isMediaOpen}
          media={activeMedia}
        />
      )}
    </main>
  );
};

export default PersonProfile;
