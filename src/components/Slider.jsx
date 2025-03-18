import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import SliderContent1 from "./SliderContent1";

const Slider = () => {
    return (
      <div className="flex justify-center my-8">
        <Swiper
          className="w-full max-w-screen-lg"
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          speed={1500}
          effect="slide"
        >
          <SwiperSlide>
            <SliderContent1 className="flex justify-center items-center" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slider;
