import { useState, useRef, useEffect, useMemo } from 'react';

import styles from './DateSlider.module.scss';

import IconNext from '@assets/icon_next.svg';
import IconPrev from '@assets/icon_prev.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

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
  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth
  );

  useEffect(() => {
    function onResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const isMobile = windowWidth <= 320;

  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3.5}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          321: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        grabCursor={true}
        pagination={isMobile && { clickable: true }}
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
          style={{
            visibility: isBeginning ? 'hidden' : 'visible',
          }}
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
