import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./style.css";
import SSlider from "./SSlider";

const Slider = () => {
  return (
    <SSlider.Wrapper>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{ delay: 5000 }}
        speed={900}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{height: '500px'}}>Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </SSlider.Wrapper>
  );
};

export default Slider;
