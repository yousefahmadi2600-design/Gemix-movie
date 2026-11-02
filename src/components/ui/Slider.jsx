import { Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const Slider = ({ children, ...props }) => {
  return (
    <Swiper
    className="px-3!"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      scrollbar={{ draggable: true }}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
