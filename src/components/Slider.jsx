import { Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const Slider = ({ children, ...props }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      scrollbar={{ draggable: true }}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
