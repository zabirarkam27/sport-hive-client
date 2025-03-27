import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SliderContent1 from "./SliderContent1";
import SliderContent2 from "./SliderContent2";
import SliderContent3 from "./SliderContent3";

import "swiper/css";
import "swiper/css/pagination";

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
            <SliderContent1/>
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent2/>
          </SwiperSlide>
          <SwiperSlide>
            <SliderContent3/>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slider;
