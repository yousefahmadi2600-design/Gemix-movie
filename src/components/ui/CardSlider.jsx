import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import MediaCard from "../MediaCard";
import { useRef, useState } from "react";
import Button from "./Button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ModalDetails from "../ModalDetails";
import { Link } from "react-router-dom";
const CardSlider = ({ children, list }) => {
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState(null);
  const swiperRef = useRef(null);
  return (
    <section>
      <div className="mt-6 flex items-center justify-between">
        {children}
        <div className="flex w-40 gap-2">
          <Link
            className="text-primary hover:text-primary/80 flex items-center"
            to={""}
          >
            see all
            <ChevronRightIcon className="size-4" />
          </Link>
          <Button
            children={
              <ChevronLeftIcon
                className="h-full w-full rounded-full p-2"
                onClick={() => {
                  swiperRef.current?.slidePrev();
                }}
              />
            }
          />
          <Button
            children={
              <ChevronRightIcon
                className="h-full w-full rounded-full p-2"
                onClick={() => {
                  swiperRef.current?.slideNext();
                }}
              />
            }
          />
        </div>
      </div>
      <Slider
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={7.2}
        spaceBetween={10}
      >
        {list?.map((item) => (
          <SwiperSlide
            onClick={() => {
              setIsMediaOpen(!isMediaOpen);
              setActiveMedia(item);
            }}
          >
            <MediaCard item={item} />
          </SwiperSlide>
        ))}
      </Slider>
      {isMediaOpen && (
        <ModalDetails setIsMediaOpen={setIsMediaOpen} media={activeMedia} />
      )}
    </section>
  );
};

export default CardSlider;
