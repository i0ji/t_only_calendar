import { useState, useRef } from 'react';

import styles from './DateSlider.module.scss';

import IconNext from '@assets/icon_next.svg';
import IconPrev from '@assets/icon_prev.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function DateSlider({
  data,
}: {
  data: IEvent[];
}) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3.5}
        spaceBetween={30}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            typeof swiper.params.navigation !== 'boolean' &&
            swiper.params.navigation
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
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
      <div className={styles.slider_nav}>
        <button
          ref={prevRef}
          className={styles.slider_nav_prev}
          style={{ visibility: isBeginning  ? 'hidden' : 'visible' }}
        >
          <IconPrev />
        </button>
        <button
          ref={nextRef}
          className={styles.slider_nav_next}
          style={{ visibility: isEnd ? 'hidden' : 'visible' }}
        >
          <IconNext />
        </button>
      </div>
    </div>
  );
}
