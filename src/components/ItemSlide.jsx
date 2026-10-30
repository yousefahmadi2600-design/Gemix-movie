import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import ItemCard from "./ItemCard";
import Select from "react-select/base";
import { useState } from "react";
const ItemSlide = ({ items, header, time = false }) => {
  const [selected, setSelected] = useState("This Week");
  const options = [
    { value: "This Week", label: "This Week" },
    { value: "Today", label: "Today" },
  ];
  return (
    <section>
      <div>
        <h2 className="p-4 text-2xl font-semibold">{header}</h2>
        {time && (
          <Select
            value={selected}
            onChange={setSelected}
            placeholder={selected}
            options={options}
          />
        )}
      </div>
      <Slider
        slidesPerView={7.2}
        spaceBetween={1}
        children={
          <>
            {items.map((item) => (
              <SwiperSlide>
                <ItemCard item={item} />
              </SwiperSlide>
            ))}
          </>
        }
      />
    </section>
  );
};

export default ItemSlide;
