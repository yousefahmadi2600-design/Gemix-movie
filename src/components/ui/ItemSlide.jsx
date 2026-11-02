import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import ItemCard from "../ItemCard";
import useMedias from "../../hooks/useMedias";
import { useEffect, useRef, useState } from "react";
import Button from "./button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ModalDetails from "../ModalDetails";
import Selector from "./Selector";
const ItemSlide = ({ header, time = false, url }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState(null);
  const swiperRef = useRef(null);
  const options = [
    { value: "week", label: "This Week" },
    { value: "day", label: "Today" },
  ];
  const [selected, setSelected] = useState({
    value: "week",
    label: "This Week",
  });
  const { data, refetch, isLoading } = useMedias(
    `${url}${time ? selected.value : ""}`,
  );
  useEffect(() => {
    refetch();
  }, [selected]);

  return (
    <section>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="p-4 text-2xl font-semibold">{header}</h2>
          {time && (
            <Selector
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
        children={
          isLoading ? (
            <h1>isloading</h1>
          ) : (
            <>
              {data?.results?.map((item) => (
                <SwiperSlide
                  onClick={() => {
                    setIsDetailsOpen(!isDetailsOpen);
                    setActiveContent(item);
                  }}
                >
                  <ItemCard item={item} />
                </SwiperSlide>
              ))}
            </>
          )
        }
      />
      {isDetailsOpen && (
        <ModalDetails
          setIsDetailsOpen={setIsDetailsOpen}
          isDetailsOpen={isDetailsOpen}
          content={activeContent}
        />
      )}
    </section>
  );
};

export default ItemSlide;
