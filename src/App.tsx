import styles from './App.module.scss';
import DateCarousel from './components/DateCarousel/DateCarousel';
import DateSlider from './components/DateSlider/DateSlider';

console.log('22.05.25/0.1.0');

export default function App() {
  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <hr />
        <h1>
          Исторические
          <br /> даты
        </h1>
      </div>

      <DateCarousel />
      
    </section>
  );
}
