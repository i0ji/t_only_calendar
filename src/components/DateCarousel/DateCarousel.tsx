import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './DateCarousel.module.scss';
import { data_set } from '../../data/data';
import DateSlider from '../DateSlider/DateSlider';

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

  useEffect(() => {
    rotateToIndex(0);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_container}>
        <div className={styles.float_date}>
          <p className={styles.float_date_left}>{min_year}</p>
          <p className={styles.float_date_right}>{max_year}</p>
        </div>
        <div className={styles.carousel_lines}>
          <div className={styles.horizontal} />

          <div className={styles.vertical} />
        </div>

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
      </div>
      <DateSlider data={current_content} />
    </div>
  );
}
