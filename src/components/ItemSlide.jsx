import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import ItemCard from "./ItemCard";
const ItemSlide = ({ items ,header}) => {
  return (
    <section>
      <h2 className="p-4 text-2xl font-semibold">{header}</h2>
      <Slider
        slidesPerView={7.2}
        spaceBetween={10}
        children={
          <>
          {items.map(item=><SwiperSlide>
              <ItemCard item={item} />
            </SwiperSlide>)}
            
          </>
        }
      />
    </section>
  );
};

export default ItemSlide;
