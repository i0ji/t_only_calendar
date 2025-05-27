import { useState, useEffect } from 'react';

import FlipNumbers from 'react-flip-numbers';

export default function AnimatedNumber(props: IAnimatedNumber) {
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

  const isMobile = windowWidth <= 320;

  return (
    <FlipNumbers
      height={isMobile ? 40 : 140}
      width={isMobile ? 30 : 100}
      perspective={600}
      play
      color={props.color}
      numberStyle={
        isMobile
          ? { fontSize: '3rem', fontWeight: 'bold' }
          : { fontSize: '7rem', fontWeight: 'bold' }
      }
      numbers={props.numbers.toString()}
    />
  );
}
