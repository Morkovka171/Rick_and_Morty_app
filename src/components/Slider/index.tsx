import React, { useRef } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SSlider from "./SSlider";
import "swiper/css";
import { slides } from "../../helpers/slides";
import Slide from "../Slide";

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const swiperRef: any = useRef(null);

  const handleChange = (mode: "prev" | "next" | number) => {
    if (mode === "prev") {
      swiperRef.current.swiper.slidePrev();
    } else if (mode === "next") {
      swiperRef.current.swiper.slideNext();
    } else if (typeof mode === "number") {
      swiperRef.current.swiper.slideTo(mode + 1, 900);
    }
  };

  return (
    <SSlider.Wrapper>
      <Swiper
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex)}
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{ delay: 5000 }}
        speed={900}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Slide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SSlider.PrevButton onClick={() => handleChange("prev")} />
      <SSlider.NextButton onClick={() => handleChange("next")} />

      <SSlider.NavigationWrapper>
        {slides.map((slide, slideIndex) => (
          <SSlider.Navigation
            key={slide.id}
            onClick={() => handleChange(slideIndex)}
            active={slideIndex === currentSlideIndex}
          />
        ))}
      </SSlider.NavigationWrapper>
    </SSlider.Wrapper>
  );
};

export default Slider;
