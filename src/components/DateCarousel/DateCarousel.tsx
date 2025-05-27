import { useState, useRef, useEffect } from 'react';
import styles from './DateCarousel.module.scss';

import gsap from 'gsap';
import AnimatedNumber from '@components/AnimatedNumber/AnimatedNumber';

import { data_set } from '@assets/data';

import DateSlider from '@components/DateSlider/DateSlider';
import FloatDescription from '@components/FloatDescription/FloatDescription';
import CarouselNav from '@components/CarouselNav/CarouselNav';

const RADIUS = 200;
const POINTS_COUNT = data_set.length;
const ANGLE_STEP = 360 / POINTS_COUNT;
const TARGET_ANGLE = 45;

export default function DateCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(
    null
  );
  const [currentRotation, setCurrentRotation] = useState(0);
  const pointsRef = useRef<HTMLDivElement>(null);

  let current_content = data_set[activeIndex].content;

  let min_year = current_content[0].year;
  let max_year =
    current_content[current_content.length - 1].year;
  const min_year_color = 'rgb(70, 94, 236)';
  const max_year_color = 'rgb(235, 90, 168)';

  const rotateToIndex = (index: number) => {
    if (!pointsRef.current) return;
    const currentAngle = index * ANGLE_STEP;
    const rotation = TARGET_ANGLE - currentAngle;
    gsap.to(pointsRef.current, {
      rotation,
      duration: 1,
      ease: 'power2.out',
      transformOrigin: '50% 50%',
      onUpdate: () => {
        const r = gsap.getProperty(
          pointsRef.current!,
          'rotation'
        ) as number;
        setCurrentRotation(r);
      },
    });
    setActiveIndex(index);
  };

  //CURRENT
  const [displayData, setDisplayData] =
    useState(current_content);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  //CURRENT

  useEffect(() => {
    rotateToIndex(0);
  }, []);

  //CURRENT
  useEffect(() => {
    if (isAnimating.current) return;
    if (sliderRef.current) {
      isAnimating.current = true;
      gsap.set(sliderRef.current, { opacity: 0 }); // мгновенное скрытие
      setDisplayData(current_content);
      gsap.to(sliderRef.current, {
        opacity: 1,
        duration: 0.3, // быстрое появление
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    } else {
      setDisplayData(current_content);
    }
  }, [current_content]);
  //CURRENT

  const handleNextDate = () => {
    if (activeIndex < POINTS_COUNT - 1) {
      const newIndex = activeIndex + 1;
      rotateToIndex(newIndex);
    }
  };

  const handlePrevDate = () => {
    if (activeIndex > 0) {
      const newIndex = activeIndex - 1;
      rotateToIndex(newIndex);
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_container}>
        <div className={styles.float_date}>
          <p className={styles.float_date_min}>
            <AnimatedNumber
              color={min_year_color}
              numbers={min_year}
            />
          </p>
          <p className={styles.float_date_max}>
            <AnimatedNumber
              color={max_year_color}
              numbers={max_year}
            />
          </p>
        </div>

        <div className={styles.carousel_lines}>
          <div className={styles.horizontal} />
          <div className={styles.vertical} />
        </div>

        <FloatDescription />

        <CarouselNav
          handlePrev={handlePrevDate}
          handleNext={handleNextDate}
          activeIndex={activeIndex}
          dataLength={POINTS_COUNT}
          isPrevDisabled={activeIndex === 0}
          isNextDisabled={activeIndex === POINTS_COUNT - 1}
        />

        <div className={styles.carousel_circle}>
          <div className={styles.label}>
            {data_set[activeIndex].label}
          </div>
          <div
            ref={pointsRef}
            className={styles.carousel_points}
            style={{ pointerEvents: 'none' }}
          >
            {data_set.map((data_item, i) => {
              const angleDeg = i * ANGLE_STEP - 90;
              const angleRad = (angleDeg * Math.PI) / 180;
              const x =
                RADIUS + 20 + RADIUS * Math.cos(angleRad);
              const y =
                RADIUS + 20 + RADIUS * Math.sin(angleRad);

              const isActive = i === activeIndex;
              const isHovered = i === hoverIndex;

              return (
                <div
                  key={data_item.id}
                  onClick={() => rotateToIndex(i)}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={`${styles.carousel_points_item} ${
                    isActive ? styles.active : ''
                  } ${
                    isHovered && !isActive ? styles.hover : ''
                  }`}
                  style={{
                    left: x,
                    top: y,
                    pointerEvents: 'auto',
                    transform: `translate(-50%, -50%) rotate(${-currentRotation}deg)`,
                  }}
                  title={data_item.label}
                >
                  {(isActive || isHovered) && (
                    <span className={styles.number}>
                      {i + 1}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <hr />
      </div>
      <div className={styles.slider_container} ref={sliderRef}>
        <DateSlider data={current_content} />
      </div>
    </div>
  );
}
