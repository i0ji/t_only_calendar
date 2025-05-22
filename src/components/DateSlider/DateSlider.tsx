import './DateSlider.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DateSlider() {
  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">Slide 4</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
