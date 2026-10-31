import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import ItemCard from "./ItemCard";
import Select from "react-select";
import useMovies from "../hooks/useMovies";
import { useEffect, useRef, useState } from "react";
import Button from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
const ItemSlide = ({ header, time = false, url }) => {
  const swiperRef = useRef(null);
  const options = [
    { value: "week", label: "This Week" },
    { value: "day", label: "Today" },
  ];
  const [selected, setSelected] = useState({
    value: "week",
    label: "This Week",
  });
  const { data, refetch, isLoading } = useMovies(
    `${url}${time ? selected.value : ""}`,
  );
  useEffect(() => {
    refetch();
  }, [selected]);
  return (
    <section>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <h2 className="p-4 text-2xl font-semibold">{header}</h2>
          {time && (
            <Select
              value={selected}
              onChange={setSelected}
              placeholder={selected}
              options={options}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: 0,
                  backgroundColor: "#fff3e1",
                  fontSize: 24,
                  fontWeight: 600,
                  boxShadow: 0,
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  border: "#6f0000",
                  backgroundColor: "#fff3e1",
                  zIndex: 20,
                  padding: 2,
                  borderRadius: 5,
                }),
                option: (baseStyles, { isSelected, isFocused }) => ({
                  ...baseStyles,
                  borderRadius: 5,
                  backgroundColor: isSelected
                    ? "#6f0000"
                    : isFocused
                      ? "#6f00009c"
                      : "#fff3e1",
                  color: isFocused ? "white" : isSelected ? "white" : "black",
                  transition: "all 200ms ease",
                }),
              }}
            />
          )}
        </div>
        <div className="flex gap-2">
          <Button
            children={
              <ChevronLeftIcon
                className="rounded-full p-2 h-full w-full"
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
                <SwiperSlide>
                  <ItemCard item={item} />
                </SwiperSlide>
              ))}
            </>
          )
        }
      />
    </section>
  );
};

export default ItemSlide;
