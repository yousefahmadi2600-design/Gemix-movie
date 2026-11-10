import { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import CardSlider from "../components/ui/CardSlider";
import useMedias from "../hooks/useMedias";
const Home = () => {
  const [trendMovieTime, setTrendMovieTime] = useState({
    value: "week",
    label: "This Week",
  });
  const [trendTvTime, setTrendTvTime] = useState({
    value: "week",
    label: "This Week",
  });
  const {
    data: trendMovies,
    // refetch: refetchTrendMovie,
    // isLoading: isLoadingTrendMovie,
  } = useMedias(`trending/movie/${trendMovieTime.value}`);
  const {
    data: trendTvs,
    // refetch: refetchTrendTv,
    // isLoading: isLoadingTrendTv,
  } = useMedias(`trending/tv/${trendTvTime.value}`);
  const {
    data: nowPlayings,
    // refetch: refetchNowPlaying,
    // isLoading: isLoadingNowPlaying,
  } = useMedias("movie/now_playing");
  const {
    data: topRateds,
    // refetch: refetchTopRated,
    // isLoading: isLoadingTopRated,
  } = useMedias("movie/top_rated");
  return (
    <main>
      <h1 className="sr-only">Discover Movies and TV Shows</h1>
      <HeroSection />
      <div className="container mx-auto">
        <CardSlider
          header={"Trending Movies"}
          list={trendMovies?.data?.results}
          selected={trendMovieTime}
          setSelected={setTrendMovieTime}
        />
        <CardSlider
          header={"Trending Series"}
          list={trendTvs?.data?.results}
          selected={trendTvTime}
          setSelected={setTrendTvTime}
        />
        <CardSlider header={"New Releases"} list={nowPlayings?.data?.results} />
        <CardSlider header={"Popular Movies"} list={topRateds?.data?.results} />
      </div>
    </main>
  );
};

export default Home;
