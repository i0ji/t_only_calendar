import styles from './DateSlider.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DateSlider({
  data,
}: {
  data: Array<IEvent>;
}) {
  return (
    <div className={styles.slider}>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        loop={false}
        modules={[Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {data.map((content_item, i) => {
          return (
            <SwiperSlide key={i}>
              <div className={styles.slider_item}>
                <h5>{content_item.year}</h5>

                <p>{content_item.description}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
