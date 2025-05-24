import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';


const points: PointData[] = [
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

const radius = 120;
const pointsCount = points.length;
const angleStep = 360 / pointsCount;
const targetAngle = -45;

export const DateCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const rotateToIndex = (index: number) => {
    if (!containerRef.current) return;

    const currentAngle = index * angleStep;

    const rotation = targetAngle - currentAngle;

    gsap.to(containerRef.current, {
      rotation: rotation,
      duration: 1,
      ease: 'power2.out',
      transformOrigin: '50% 50%',
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    rotateToIndex(0);
  }, []);

  return (
    <div style={{ textAlign: 'center', userSelect: 'none' }}>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: radius * 2 + 40,
          height: radius * 2 + 40,
          margin: '0 auto',
          borderRadius: '50%',
          transformOrigin: '50% 50%',
        }}
      >
        {points.map((point, i) => {
          const angleDeg = i * angleStep - 90;
          const angleRad = (angleDeg * Math.PI) / 180;
          const x = radius + radius * Math.cos(angleRad);
          const y = radius + radius * Math.sin(angleRad);

          return (
            <div
              key={point.id}
              onClick={() => rotateToIndex(i)}
              style={{
                position: 'absolute',
                left: x,
                top: y,
                width: 30,
                height: 30,
                borderRadius: '50%',
                backgroundColor:
                  i === activeIndex ? '#007bff' : '#ccc',
                color: '#fff',
                lineHeight: '30px',
                textAlign: 'center',
                cursor: 'pointer',
                userSelect: 'none',
                transform: 'translate(-50%, -50%)',
                boxShadow:
                  i === activeIndex
                    ? '0 0 10px #007bff'
                    : 'none',
                transition: 'background-color 0.3s',
              }}
              title={point.label}
            >
              {i + 1}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 40, minHeight: 100 }}>
        {points[activeIndex].content}
      </div>
    </div>
  );
};
