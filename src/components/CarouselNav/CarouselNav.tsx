import styles from './CarouselNav.module.scss';
import IconNext from '@assets/icon_next.svg';
import IconPrev from '@assets/icon_prev.svg';

export default function CarouselNavigation(props: ICarouselNav) {
  return (
    <div className={styles.carousel_nav}>
      <p>
        {props.activeIndex + 1}/{props.dataLength}
      </p>
      <div className={styles.nav_controls}>
        <button
          onClick={props.handlePrev}
          disabled={props.isPrevDisabled}
        >
          <IconPrev />
        </button>
        <button
          onClick={props.handleNext}
          disabled={props.isNextDisabled}
        >
          <IconNext />
        </button>
      </div>
    </div>
  );
}
