import { useQuery } from "@tanstack/react-query";
import { Search, X } from "lucide-react";
import { useState } from "react";
import Select from "react-select";
import { getSearchResults } from "../services/getSearchResults";
import MediaSearchCard from "./MediaSearchCard";
import PersonSearchCard from "./PersonSearchCard";
import { useNavigate } from "react-router-dom";

const ModalSearch = ({ setIsSearchOpen }) => {
  const selectOptions = [
    { value: "multi", label: "All" },
    { value: "movie", label: "Movies" },
    { value: "tv", label: "TV Shows" },
    { value: "person", label: "People" },
  ];
  const [searchSelect, setSearchSelect] = useState({
    value: "multi",
    label: "All",
  });
  const [searchValue, setSearchValue] = useState(null);
  const { data: searchResults } = useQuery({
    queryFn: () => getSearchResults(searchSelect.value, searchValue),
    queryKey: [searchSelect.value, searchValue],
    enabled: searchValue ? true : false,
  });
  const navigate = useNavigate();
  const onPersonClick = (id) => {
    setIsSearchOpen(false);
    navigate(`/person/${id}`);
  };
  const onMediaClick = (type, id) => {
    setIsSearchOpen(false);
    navigate(`/mediaDetails/${type}/${id}`);
  };
  return (
    <div
      className="fixed inset-0 z-30 bg-black/40"
      onClick={() => {
        setIsSearchOpen(false);
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-background fixed top-30 left-1/2 w-150 -translate-x-1/2 overflow-hidden rounded-xl"
      >
        <div className="flex h-20 w-full items-center gap-2 border-b border-b-gray-500 px-2">
          <Search className="w-10" />
          <Select
            value={searchSelect}
            onChange={setSearchSelect}
            options={selectOptions}
            styles={{
              menu: (baseStyles) => ({
                ...baseStyles,
                minWidth: 150,
                border: "#6f0000",
                backgroundColor: "#fff3e1",
                zIndex: 20,
                padding: 2,
                borderRadius: 8,
                fontSize: 14,
              }),
              option: (baseStyles, { isSelected, isFocused }) => ({
                ...baseStyles,
                borderRadius: 8,
                backgroundColor: isSelected
                  ? "#6f0000"
                  : isFocused
                    ? "#6f00009c"
                    : "#fff3e1",
                color: isFocused ? "white" : isSelected ? "white" : "black",
                transition: "all 200ms ease",
              }),
              control: (baseStyles) => ({
                ...baseStyles,
                border: 0,
                backgroundColor: "white",
                fontSize: 14,
                fontWeight: 500,
                boxShadow: 0,
                borderRadius: 8,
              }),
            }}
          />
          <input
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            type="text"
            className="h-9.5 flex-1 border-0 px-2 outline-0"
            placeholder="Search movies and TV shows..."
          />
          {searchValue && (
            <div className="mr-3 hover:cursor-pointer">
              <X className="transition-all duration-200 hover:stroke-gray-500" />
            </div>
          )}
        </div>
        {!searchValue && (
          <div className="flex h-70 items-center justify-center">
            <div className="max-w-70 -translate-y-1/3">
              <div className="flex items-center justify-center">
                <Search className="size-10 stroke-gray-600" />
              </div>
              <h4 className="py-3 text-center font-semibold">
                Find something to watch
              </h4>
              <h5 className="text-center text-sm">
                Start typing a title, then narrow by{" "}
                <span className="font-semibold">Movies</span>,{" "}
                <span className="font-semibold">TV Shows</span> or{" "}
                <span className="font-semibold">People</span>.
              </h5>
            </div>
          </div>
        )}
        {searchValue && (
          <div className="max-h-100 overflow-y-scroll py-4">
            <div className="px-2">
              {searchResults?.data?.results?.map((result) =>
                result.media_type === "tv" || result.media_type === "movie" ? (
                  <MediaSearchCard
                    result={result}
                    mediaType={searchSelect.value}
                    handleClick={onMediaClick}
                  />
                ) : result.media_type === "person" ? (
                  <PersonSearchCard
                    result={result}
                    handleClick={onPersonClick}
                  />
                ) : searchSelect.value === "tv" ||
                  searchSelect.value === "movie" ? (
                  <MediaSearchCard
                    handleClick={onMediaClick}
                    result={result}
                    mediaType={searchSelect.value}
                  />
                ) : (
                  <PersonSearchCard
                    handleClick={onPersonClick}
                    result={result}
                  />
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalSearch;
