import styles from './App.module.scss';
import DateCarousel from '@components/DateCarousel/DateCarousel';

//CONSOLE
console.log('23.05.25/0.4.0');

export default function App() {
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <DateCarousel />
      </div>
    </section>
  );
}
