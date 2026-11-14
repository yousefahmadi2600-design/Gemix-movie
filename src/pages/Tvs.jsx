import { useState } from "react";
import CardSlider from "../components/ui/CardSlider";
import useMedias from "../hooks/useMedias";

const Tvs = () => {
  const [trendTvTime, setTrendTvTime] = useState({
    value: "week",
    label: "This Week",
  });
  const {
    data: trendTvs,
    // refetch: refetchTrendTv,
    // isLoading: isLoadingTrendTv,
  } = useMedias(`trending/tv/${trendTvTime.value}`);
  const {
    data: onTheAirTvs,
    // refetch: refetchTopRated,
    // isLoading: isLoadingTopRated,
  } = useMedias("tv/on_the_air");
  const {
    data: airingTodayTvs,
    // refetch: refetchTopRated,
    // isLoading: isLoadingTopRated,
  } = useMedias("tv/airing_today");
  const {
    data: topRatedTvs,
    // refetch: refetchTopRated,
    // isLoading: isLoadingTopRated,
  } = useMedias("tv/top_rated");
  const {
    data: popularTvs,
    // refetch: refetchTopRated,
    // isLoading: isLoadingTopRated,
  } = useMedias("tv/popular");

  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <CardSlider
          header={"Trending Series"}
          list={trendTvs?.data?.results}
          selected={trendTvTime}
          setSelected={setTrendTvTime}
        />
        <CardSlider
          header={"On The Air TV Series"}
          list={onTheAirTvs?.data?.results}
        />
        <CardSlider
          header={"Airing Today TV Series"}
          list={airingTodayTvs?.data?.results}
        />
        <CardSlider
          header={"Top Rated Series"}
          list={topRatedTvs?.data?.results}
        />
        <CardSlider
          header={"Popular Series"}
          list={popularTvs?.data?.results}
        />
      </div>
    </div>
  );
};

export default Tvs;
