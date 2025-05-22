import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './DateCarousel.module.scss';
import { data_set } from '../../data/data';

const points = [
  {
    id: 0,
    label: 'Точка 1',
    content: <p>Контент для точки 1</p>,
  },
  {
    id: 1,
    label: 'Точка 2',
    content: <p>Контент для точки 2</p>,
  },
  {
    id: 2,
    label: 'Точка 3',
    content: <p>Контент для точки 3</p>,
  },
  {
    id: 3,
    label: 'Точка 4',
    content: <p>Контент для точки 4</p>,
  },
  {
    id: 4,
    label: 'Точка 5',
    content: <p>Контент для точки 5</p>,
  },
  {
    id: 5,
    label: 'Точка 6',
    content: <p>Контент для точки 6</p>,
  },
];

const RADIUS = 200;
const POINTS_COUNT = points.length;
const ANGLE_STEP = 360 / data_set.length;
const TARGET_ANGLE = 45;

export default function DateCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(
    null
  );
  const [currentRotation, setCurrentRotation] = useState(0);
  const pointsRef = useRef<HTMLDivElement>(null);

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
        <div className={styles.crossLines}>
          <div className={styles.lineVertical} />
          <div className={styles.lineHorizontal} />
        </div>
        <div className={styles.carousel_circle} />
        <div
          ref={pointsRef}
          className={styles.carousel_points}
          style={{ pointerEvents: 'none' }}
        >
          {points.map((point, i) => {
            const angleDeg = i * ANGLE_STEP - 90;
            const angleRad = (angleDeg * Math.PI) / 180;
            const x = RADIUS + 20 + RADIUS * Math.cos(angleRad);
            const y = RADIUS + 20 + RADIUS * Math.sin(angleRad);

            const isActive = i === activeIndex;
            const isHovered = i === hoverIndex;

            return (
              <div
                key={point.id}
                onClick={() => rotateToIndex(i)}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                className={`${styles.carousel_points_item} ${
                  isActive ? styles.active : ''
                } ${isHovered && !isActive ? styles.hover : ''}`}
                style={{
                  left: x,
                  top: y,
                  pointerEvents: 'auto',
                  transform: `translate(-50%, -50%) rotate(${-currentRotation}deg)`,
                }}
                title={point.label}
              >
                {(isActive || isHovered) && (
                  <span className={styles.number}>{i + 1}</span>
                )}
              </div>
            );
          })}
        </div>
        {/* <div className={styles.centerPoint} /> */}
        <div className={styles.label}>
          {points[activeIndex].label}
        </div>
      </div>
      <div className={styles.content}>
        {points[activeIndex].content}
      </div>
    </div>
  );
}
