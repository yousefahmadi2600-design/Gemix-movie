import Slider from "../components/Slider";
import { SwiperSlide } from "swiper/react";
import OIP from "../assests/images/OIP.jpg";

const Home = () => {
  return (
    <main>
      <section className="relative h-180 w-full bg-amber-200">
        <Slider
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ el: ".my.pagination", clickable: true }}
          className="h-full w-full"
          children={
            <SwiperSlide>
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `
               linear-gradient(to bottom , transparent, transparent, #FFF3E1),
                url(${OIP})
       `,
                }}
              ></div>
            </SwiperSlide>
          }
        />
        <div className="absolute top-1/2 left-1/20 z-20 h-100 w-100 -translate-y-1/2 bg-red-500">
          <h1 className="w-full text-center">TITANIC</h1>
        </div>
        <div className="my-pagination absolute right-1/40 bottom-1/7 z-50 h-20 w-60 bg-amber-300"></div>
      </section>
    </main>
  );
};

export default Home;
