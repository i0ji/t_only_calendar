import styles from './App.module.scss';
import DateCarousel from '@components/DateCarousel/DateCarousel';

export default function App() {
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <DateCarousel />
      </div>
    </section>
  );
}
