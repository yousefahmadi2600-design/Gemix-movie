import Slider from "../components/Slider";
import { SwiperSlide } from "swiper/react";
import useMovies from "../hooks/useMovies";
import { makeImgURL } from "../utils/makeImgURL";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Play,
  Star,
} from "lucide-react";
import { genres } from "./constants/movieGenre";
import Button from "./ui/button";
import { useRef } from "react";

const HeroSection = () => {
  const swiperRef = useRef(null);
  const { data: trendMovies } = useMovies("trending/movie/week");
  const movieSlice = trendMovies?.results?.slice(0, 5);
  return (
    <section className="relative h-190 w-full">
      {movieSlice?.length > 0 && (
        <Slider
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1}
          pagination={{ el: ".my-pagination", clickable: true }}
          className="h-full w-full"
          children={movieSlice?.map((movie) => (
            <SwiperSlide className="relative">
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `
               linear-gradient(to bottom , transparent, transparent, transparent, #FFF3E1),
                url(${makeImgURL(movie.backdrop_path, "original")})
       `,
                }}
              ></div>
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0 z-10 bg-black/20"></div> 
              <div className="absolute top-6/10 left-1/20 z-20 h-100 w-100 -translate-y-1/2 text-white">
                <div>
                  <h2 className="w-full py-10 text-center text-5xl">
                    {movie.title}
                  </h2>
                </div>
                <div className="flex gap-2 py-4 text-sm">
                  <Star className="size-4.5 fill-yellow-400 stroke-yellow-400" />
                  <h3 className="text-yellow-400">
                    {movie.vote_average.toFixed(1)}
                  </h3>
                  &nbsp;&middot;&nbsp;{movie.release_date.slice(0, 4)}
                  {genres
                    .filter((genre) =>
                      movie.genre_ids.some((genID) => genID === genre.id),
                    )
                    .map((item) => (
                      <h3>&nbsp;&middot;&nbsp;{item.name}</h3>
                    ))}
                </div>
                <div>
                  <h3 className="line-clamp-3">{movie.overview}</h3>
                </div>
                <div className="flex gap-2 py-6 text-black">
                  <button className="bg-primary shadow-primary/70 flex h-10 w-25 items-center justify-center rounded-3xl text-white shadow-lg">
                    <Play /> Play
                  </button>
                  <Button children={<Bookmark className="stroke-gray-200" />} />
                  <Button
                    children={<CircleAlert className="stroke-gray-200" />}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        />
      )}
      <div className="absolute right-1/15 bottom-1/4 z-20 flex h-20 gap-2">
        <Button
          children={
            <ChevronLeft
              className="stroke-gray-200"
              onClick={() => {
                swiperRef.current?.slidePrev();
              }}
            />
          }
        />

        <Button
          children={
            <ChevronRight
              className="stroke-gray-200"
              onClick={() => {
                swiperRef.current?.slideNext();
              }}
            />
          }
        />
      </div>
      <div className="absolute right-1/40 bottom-1/7 z-20 flex h-20 w-60">
        <div className="my-pagination"></div>
      </div>
    </section>
  );
};

export default HeroSection;
