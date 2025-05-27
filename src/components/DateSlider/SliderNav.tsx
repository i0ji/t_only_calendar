import { memo, forwardRef } from 'react';
import styles from './DateSlider.module.scss';
import IconPrev from '@assets/icon_prev.svg';
import IconNext from '@assets/icon_next.svg';

export const MemoPrevButton = memo(
  forwardRef<HTMLButtonElement>((props, ref) => (
    <button
      ref={ref}
      className={styles.slider_nav_prev}
      {...props}
    >
      <IconPrev />
    </button>
  ))
);

export const MemoNextButton = memo(
  forwardRef<HTMLButtonElement>((props, ref) => (
    <button
      ref={ref}
      className={styles.slider_nav_next}
      {...props}
    >
      <IconNext />
    </button>
  ))
);
