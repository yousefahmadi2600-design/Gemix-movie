import { useState } from "react";
import CardSlider from "../components/ui/CardSlider";
import useMedias from "../hooks/useMedias";
import TimeSelect from "../components/ui/TimeSelect";
import { selectTimeOptions } from "../../constants/timeOptions";
import useMediasByGen from "../hooks/useMediasByGen";
const Movies = () => {
  const [trendMovieTime, setTrendMovieTime] = useState({
    value: "week",
    label: "This Week",
  });
  const [genSelect, setGenSelect] = useState({
    value: 28,
    label: "Action",
  });
  const genOptions = [
    {
      value: 28,
      label: "Action",
    },
    {
      value: 12,
      label: "Abenteuer",
    },
    {
      value: 16,
      label: "Animation",
    },
    {
      value: 35,
      label: "Komödie",
    },
    {
      value: 80,
      label: "Krimi",
    },
    {
      value: 99,
      label: "Dokumentarfilm",
    },
    {
      value: 18,
      label: "Drama",
    },
    {
      value: 10751,
      label: "Familie",
    },
    {
      value: 14,
      label: "Fantasy",
    },
    {
      value: 36,
      label: "Historie",
    },
    {
      value: 27,
      label: "Horror",
    },
    {
      value: 10402,
      label: "Musik",
    },
    {
      value: 9648,
      label: "Mystery",
    },
    {
      value: 10749,
      label: "Liebesfilm",
    },
    {
      value: 878,
      label: "Science Fiction",
    },
    {
      value: 10770,
      label: "TV-Film",
    },
    {
      value: 53,
      label: "Thriller",
    },
    {
      value: 10752,
      label: "Kriegsfilm",
    },
    {
      value: 37,
      label: "Western",
    },
  ];
  const {
    data: trendMovies,
    // refetch: refetchTrendMovie,
    // isLoading: isLoadingTrendMovie,
  } = useMedias(`trending/movie/${trendMovieTime.value}`);
  const {
    data: nowPlayingMovies,
    // refetch: refetchNowPlaying,
    // isLoading: isLoadingNowPlaying,
  } = useMedias("movie/now_playing");
  const {
    data: topRatedMovies,
    // refetch: refetchTopRated,
    // isLoading: isLoadingTopRated,
  } = useMedias("movie/top_rated");
  const {
    data: popularMovies,
    // refetch: refetchTopRated,
    // isLoading: isLoadingTopRated,
  } = useMedias("movie/popular");
  const {
    data: upcomingMovies,
    // refetch: refetchTopRated,
    // isLoading: isLoadingTopRated,
  } = useMedias("movie/upcoming");
  const { data: MediasByGen } = useMediasByGen("movie", genSelect.value, {
    enabled: true,
  });
  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <CardSlider list={trendMovies?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">Trending Movies</h2>
            <TimeSelect
              options={selectTimeOptions}
              selected={trendMovieTime}
              setSelected={setTrendMovieTime}
            />
          </div>
        </CardSlider>
        <CardSlider list={MediasByGen?.data?.results}>
          <TimeSelect
            options={genOptions}
            selected={genSelect}
            setSelected={setGenSelect}
          />
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold"> Movies</h2>
          </div>
        </CardSlider>
        <CardSlider list={nowPlayingMovies?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">Now Playing Movies</h2>
          </div>
        </CardSlider>
        <CardSlider list={topRatedMovies?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">Top Rated Movies</h2>
          </div>
        </CardSlider>
        <CardSlider list={popularMovies?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">Popular Movies</h2>
          </div>
        </CardSlider>
        <CardSlider list={upcomingMovies?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">Upcoming Movies</h2>
          </div>
        </CardSlider>
      </div>
    </div>
  );
};

export default Movies;
