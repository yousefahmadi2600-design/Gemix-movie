import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import MediaCard from "../MediaCard";
import { useRef, useState } from "react";
import Button from "./Button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ModalDetails from "../ModalDetails";
import TimeSelect from "./TimeSelect";
const CardSlider = ({ header, list, selected, setSelected }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [activeMedia, setActiveMedia] = useState(null);
  const swiperRef = useRef(null);
  const options = [
    { value: "week", label: "This Week" },
    { value: "day", label: "Today" },
  ];

  return (
    <section>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="p-4 text-2xl font-semibold">{header}</h2>
          {selected && (
            <TimeSelect
              options={options}
              selected={selected}
              setSelected={setSelected}
            />
          )}
        </div>
        <div className="flex gap-2">
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
              setIsDetailsOpen(!isDetailsOpen);
              setActiveMedia(item);
            }}
          >
            <MediaCard item={item} />
          </SwiperSlide>
        ))}
      </Slider>
      {isDetailsOpen && (
        <ModalDetails
          setIsDetailsOpen={setIsDetailsOpen}
          isDetailsOpen={isDetailsOpen}
          media={activeMedia}
        />
      )}
    </section>
  );
};

export default CardSlider;
