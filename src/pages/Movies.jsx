import { useState } from "react";
import CardSlider from "../components/ui/CardSlider";
import useMedias from "../hooks/useMedias";

const Movies = () => {
  const [trendMovieTime, setTrendMovieTime] = useState({
    value: "week",
    label: "This Week",
  });
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
  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <CardSlider
          header={"Trending Movies"}
          list={trendMovies?.data?.results}
          selected={trendMovieTime}
          setSelected={setTrendMovieTime}
        />
        <CardSlider
          header={"Now Playing Movies"}
          list={nowPlayingMovies?.data?.results}
        />
        <CardSlider
          header={"Top Rated Movies"}
          list={topRatedMovies?.data?.results}
        />
        <CardSlider
          header={"Popular Movies"}
          list={popularMovies?.data?.results}
        />
        <CardSlider
          header={"Upcoming Movies"}
          list={upcomingMovies?.data?.results}
        />
      </div>
    </div>
  );
};

export default Movies;
