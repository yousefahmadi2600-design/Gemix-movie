import { useState } from "react";
import CardSlider from "../components/ui/CardSlider";
import useMedias from "../hooks/useMedias";
import TimeSelect from "../components/ui/TimeSelect";
import { selectTimeOptions } from "../../constants/timeOptions";
import useMediasByGen from "../hooks/useMediasByGen";

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

  const [genSelect, setGenSelect] = useState({
    value: 10751,
    label: "Familie",
  });
  const genOptions = [
    {
      value: 10759,
      label: "Action & Adventure",
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
      value: 10762,
      label: "Kids",
    },
    {
      value: 9648,
      label: "Mystery",
    },
    {
      value: 10763,
      label: "News",
    },
    {
      value: 10764,
      label: "Reality",
    },
    {
      value: 10765,
      label: "Sci-Fi & Fantasy",
    },
    {
      value: 10766,
      label: "Soap",
    },
    {
      value: 10767,
      label: "Talk",
    },
    {
      value: 10768,
      label: "War & Politics",
    },
    {
      value: 37,
      label: "Western",
    },
  ];
  const { data: MediasByGen } = useMediasByGen("tv", genSelect.value, {
    enabled: true,
  });
  return (
    <div className="pt-16">
      <div className="container mx-auto">
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
        <CardSlider list={MediasByGen?.data?.results}>
          <TimeSelect
            options={genOptions}
            selected={genSelect}
            setSelected={setGenSelect}
          />
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold"> Series</h2>
          </div>
        </CardSlider>
        <CardSlider list={onTheAirTvs?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">On The Air TV Series</h2>
          </div>
        </CardSlider>
        <CardSlider list={airingTodayTvs?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">
              Airing Today TV Series
            </h2>
          </div>
        </CardSlider>
        <CardSlider list={topRatedTvs?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">Top Rated Series</h2>
          </div>
        </CardSlider>
        <CardSlider list={popularTvs?.data?.results}>
          <div className="flex flex-1 items-center">
            <h2 className="p-4 text-2xl font-semibold">Popular Series</h2>
          </div>
        </CardSlider>
      </div>
    </div>
  );
};

export default Tvs;
