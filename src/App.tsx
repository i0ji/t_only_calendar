import styles from './App.module.scss';
import DateCarousel from '@components/DateCarousel/DateCarousel';

//CONSOLE
console.log('24.05.25/0.4.5');

export default function App() {
  return (
    <section className={styles.main}>
      <div className={styles.wrapper}>
        <DateCarousel />
      </div>
    </section>
  );
}
