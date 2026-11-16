import { useState } from "react";
import HeroSection from "../components/home/HeroSection";
import CardSlider from "../components/ui/CardSlider";
import useMedias from "../hooks/useMedias";
import TimeSelect from "../components/ui/TimeSelect";
import { selectTimeOptions } from "../../constants/timeOptions";
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
        <CardSlider list={trendTvs?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">Trending Series</h2>
            <TimeSelect
              options={selectTimeOptions}
              selected={trendTvTime}
              setSelected={setTrendTvTime}
            />
          </div>
        </CardSlider>
        <CardSlider list={nowPlayings?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">New Releases</h2>
          </div>
        </CardSlider>
        <CardSlider list={topRateds?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">Popular Movies</h2>
          </div>
        </CardSlider>
      </div>
    </main>
  );
};

export default Home;
