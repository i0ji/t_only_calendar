import styles from './CarouselNav.module.scss';
import prev from '../../assets/prev.png';
import next from '../../assets/next.png';

export default function CarouselNavigation(props: ICarouselNav) {
  return (
    <div className={styles.carousel_nav}>
      <p>
        {props.activeIndex + 1}/{props.dataLength}
      </p>
      <div className={styles.nav_controls}>
        <button onClick={props.handlePrev}>
          <img src={prev} alt="НАЗАД" />
        </button>
        <button onClick={props.handleNext}>
          <img src={next} alt="ВПЕРЁД" />
        </button>
      </div>
    </div>
  );
}
